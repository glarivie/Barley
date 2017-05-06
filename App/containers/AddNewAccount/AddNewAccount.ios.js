import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import actions from '../../actions'
import colors from '../../styles/shared/variables.styles'

import styles from './AddNewAccount.styles'

class AddNewAccount extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  static route = {
    navigationBar: { title: 'Add new account' }
  }

  state = {
    account: {
      accountName: '',
      bankName: '',
      amount: '',
    },
  }

  handleChangeInput = (key, value) =>
    this.setState({ account: { ...this.state.account, [key]: value } })

  addNewAccount = () => {
    const { dispatch, navigator } = this.props
    const { account } = this.state

    dispatch(actions.accounts.setAccount({
      ...account,
      amount: parseFloat(account.amount.replace(',', '.')),
    }))
    navigator.pop()
  }

  render () {
    const { account: { accountName, bankName, amount } } = this.state
    const isDisabled = isEmpty(accountName) || isEmpty(bankName)
    const defaultOptions = {
      placeholderTextColor: colors.beige,
      keyboardAppearance: 'dark',
      spellCheck: false,
    }

    return (
      <ScrollView style={styles.AddNewAccount}>
        <FormLabel>Bank name</FormLabel>
        <FormInput
          value={bankName}
          onChangeText={value => this.handleChangeInput('bankName', value)}
          placeholder="ING Direct"
          {...defaultOptions}
          autoFocus
        />

        <FormLabel>Account type</FormLabel>
        <FormInput
          value={accountName}
          onChangeText={value => this.handleChangeInput('accountName', value)}
          placeholder="Compte courant"
          {...defaultOptions}
        />

        <FormLabel>Current amount</FormLabel>
        <FormInput
          value={amount.toString()}
          defaultValue="0"
          keyboardType="decimal-pad"
          onChangeText={value => this.handleChangeInput('amount', value)}
          placeholder="0,00"
          {...defaultOptions}
        />

        <Button
          icon={{ name: 'ios-add-circle-outline', type: 'ionicon' }}
          title='Add an account'
          onPress={this.addNewAccount}
          buttonStyle={styles.AddButton}
          disabledStyle={styles.DisabledButton}
          disabled={isDisabled}
        />

        <View style={styles.infos}>
          <Text style={styles.instructions}>
            Add an account by filling all the fields before using app functionnalities
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default connect()(AddNewAccount)
