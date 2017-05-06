import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, ActionSheetIOS } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { get, isEmpty, isNil, has } from 'lodash'

import actions from '../../actions'
import colors from '../../styles/shared/variables.styles'

import styles from './AddOrEditAccount.styles'

class AddOrEditAccount extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    isAccount: PropTypes.bool.isRequired,
  }

  static route = {
    navigationBar: {
      title: params =>
        has(params, '_id') ? 'Edit account' : 'Add new account',
    }
  }

  state = { account: this.props.account }

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

  deleteAccount = () => {
    const { account, dispatch, navigator } = this.props

    dispatch(actions.accounts.deleteAccount(get(account, '_id')))
    navigator.popToTop()
  }

  showActionSheet = () => {
    const { account: { bankName, accountName } } = this.props

    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Delete', 'Cancel'],
      title: 'Confirm delete account ?',
      message: `${bankName} - ${accountName}`,
      cancelButtonIndex: 1,
      destructiveButtonIndex: 0,
    },
    buttonIndex => buttonIndex === 0 ? this.deleteAccount() : false)
  }

  render () {
    const { isAccount } = this.props
    const { account: { accountName, bankName, amount } } = this.state
    const isDisabled = isEmpty(accountName) || isEmpty(bankName)
    const defaultOptions = {
      placeholderTextColor: colors.beige,
      spellCheck: false,
    }

    return (
      <ScrollView style={styles.AddOrEditAccount}>
        <FormLabel>Bank name</FormLabel>
        <FormInput
          value={bankName}
          onChangeText={value => this.handleChangeInput('bankName', value)}
          placeholder="ING Direct"
          {...defaultOptions}
          autoFocus={!isAccount}
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
          icon={{
            name: isAccount ? 'ios-create-outline' : 'ios-add-circle-outline',
            type: 'ionicon'
          }}
          title={isAccount ? 'Edit account' : 'Add an account'}
          onPress={this.addNewAccount}
          buttonStyle={styles.AddButton}
          disabledStyle={styles.DisabledButton}
          disabled={isDisabled}
        />

        {isAccount && (
          <Button
            icon={{ name: 'ios-trash-outline', type: 'ionicon' }}
            title='Delete account'
            onPress={this.showActionSheet}
            buttonStyle={styles.DeleteButton}
          />
        )}

        {!isAccount && (
          <View style={styles.infos}>
            <Text style={styles.instructions}>
              Add an account by filling all the fields before using app functionnalities
            </Text>
          </View>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ accounts }, { route: { params } }) => {
  const account = get(accounts, 'accounts', []).find(({ _id }) => _id === params._id)
  const defaultAccount = {
    accountName: '',
    bankName: '',
    amount: '',
  }

  return ({
    isAccount: !isNil(account),
    account: isNil(account) ? defaultAccount : account,
  })
}

export default connect(mapStateToProps)(AddOrEditAccount)
