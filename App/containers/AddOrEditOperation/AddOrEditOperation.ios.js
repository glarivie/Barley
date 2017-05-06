import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, Keyboard } from 'react-native'
import { FormLabel, FormInput, Button, ButtonGroup } from 'react-native-elements'
// import SimplePicker from 'react-native-simple-picker'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { format } from 'date-fns'

import SimplePicker from '../../components/SimplePicker'

import actions from '../../actions'
import { categories } from '../../constants'
import colors from '../../styles/shared/variables.styles'

import styles from './AddOrEditOperation.styles'

class AddOrEditOperation extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  }

  static route = {
    navigationBar: { title: 'Add new operation' }
  }

  state = {
    type: 'debit',
    label: '',
    category: '',
    amount: '',
  }

  handleChangeType = index => {
    const buttons = ['debit', 'credit']

    this.setState({ type: buttons[index] })
  }

  handleChangeInput = (key, value) => this.setState({ [key]: value })

  togglePicker = type => {
    Keyboard.dismiss()
    this._picker.togglePicker()
  }

  addNewOperation = async () => {
    const { dispatch, navigator, route: { params } } = this.props
    const { amount: nb, type } = this.state
    const amount = nb.replace(',', '.')

    dispatch(actions.accounts.addNewOperation(params._id, {
      ...this.state,
      amount: parseFloat(type === 'debit' ? `-${amount}` : amount),
      date: format(new Date(), 'DD/MM/YYYY'),
    }))
    navigator.pop()
  }

  render () {
    const buttons = ['debit', 'credit']
    const { type, label, category, amount } = this.state
    const isDisabled = isEmpty(label) || isEmpty(amount)
    const defaultOptions = {
      placeholderTextColor: colors.beige,
      spellCheck: false,
    }

    return (
      <ScrollView style={styles.AddOrEditOperation}>
        <ButtonGroup
          buttons={buttons}
          onPress={this.handleChangeType}
          selectedIndex={buttons.findIndex(el => el === type)}
          containerStyle={styles.ButtonsGroup}
          buttonStyle={styles.TypeButtons}
          selectedBackgroundColor={colors.pistache}
          selectedTextStyle={styles.selectedText}
          innerBorderStyle={styles.innerBorder}
        />
        <FormLabel>Label</FormLabel>
        <FormInput
          value={label}
          placeholder="Bouygues mobile"
          onChangeText={value => this.handleChangeInput('label', value)}
          {...defaultOptions}
          autoFocus
        />

        <FormLabel>Category</FormLabel>
        <FormInput
          value={category}
          placeholder="Abonnements"
          onFocus={this.togglePicker}
          {...defaultOptions}
        />

        <FormLabel>Amount</FormLabel>
        <FormInput
          value={amount.toString()}
          placeholder="0,00"
          defaultValue="0"
          keyboardType="decimal-pad"
          onChangeText={value => this.handleChangeInput('amount', value)}
          {...defaultOptions}
        />

        <Button
          icon={{ name: 'ios-add-circle-outline', type: 'ionicon' }}
          title='Add this operation'
          onPress={this.addNewOperation}
          buttonStyle={styles.AddButton}
          disabledStyle={styles.DisabledButton}
          disabled={isDisabled}
        />

        <View style={styles.infos}>
          <Text style={styles.instructions}>
            All fields but category are required
          </Text>
        </View>

        <SimplePicker
          ref={p => this._picker = p}
          options={categories}
          onSubmit={value => this.handleChangeInput('category', value)}
          confirmText="Select"
        />
      </ScrollView>
    )
  }
}

export default connect()(AddOrEditOperation)
