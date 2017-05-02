import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, Keyboard } from 'react-native'
import { FormLabel, FormInput, Button, ButtonGroup } from 'react-native-elements'
import SimplePicker from 'react-native-simple-picker'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'
import { format } from 'date-fns'

import actions from '../../actions'
import { categories } from '../../constants'
import colors from '../../styles/shared/variables.styles'

import styles from './AddNewOperation.styles'

class AddNewOperation extends Component {
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
    this._picker.show()
  }

  AddNewOperation = async () => {
    const { dispatch, navigator, route: { params } } = this.props
    const { amount, type } = this.state

    dispatch(actions.accounts.AddNewOperation(params._id, {
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

    return (
      <ScrollView style={styles.AddNewOperation}>
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
          onChangeText={value => this.handleChangeInput('label', value)}
        />

        <FormLabel>Category</FormLabel>
        <FormInput
          value={category}
          onFocus={this.togglePicker}
        />

        <FormLabel>Amount</FormLabel>
        <FormInput
          value={amount.toString()}
          defaultValue="0"
          keyboardType="decimal-pad"
          onChangeText={value => this.handleChangeInput('amount', value)}
        />

        <Button
          icon={{ name: 'ios-add-circle-outline', type: 'ionicon' }}
          title='Add this operation'
          onPress={this.AddNewOperation}
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

export default connect()(AddNewOperation)
