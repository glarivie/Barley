import React, { Component, PropTypes } from 'react'
import { ScrollView, ActionSheetIOS, Keyboard } from 'react-native'
import SimplePicker from 'react-native-simple-picker'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'

import actions from '../../actions'
import { banks } from '../../constants'

import styles from './EditAccount.styles'

class EditAccount extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigator: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
  }

  static route = {
    navigationBar: { title: 'Edit account' }
  }

  state = { ...this.props.account }

  handleChangeInput = (key, value) => this.setState({ [key]: value })

  togglePicker = type => {
    Keyboard.dismiss()
    this._picker.show()
  }

  editAccount = () => {
    const { dispatch, navigator, account } = this.props
    const { amount } = this.state

    dispatch(actions.accounts.editAccount({
      ...this.state,
      amount: parseFloat(`${amount}`.replace(',', '.')),
      _id: account._id,
    }))
    navigator.pop()
  }

  deleteAccount = () => {
    const { account, dispatch, navigator } = this.props

    dispatch(actions.accounts.deleteAccount(get(account, '_id')))
    navigator.popToTop()
  }

  showActionSheet = () => {
    const { account: { bankName, accountName} } = this.props

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
    const { accountName, bankName, amount } = this.state
    const isDisabled = isEmpty(accountName) || isEmpty(bankName)

    return (
      <ScrollView style={styles.EditAccount}>
        <FormLabel>Bank name</FormLabel>
        <FormInput
          value={bankName}
          onFocus={this.togglePicker}
        />

        <FormLabel>Account type</FormLabel>
        <FormInput
          value={accountName}
          onChangeText={value => this.handleChangeInput('accountName', value)}
        />

        <FormLabel>Current amount</FormLabel>
        <FormInput
          value={amount.toString()}
          defaultValue="0"
          keyboardType="decimal-pad"
          onChangeText={value => this.handleChangeInput('amount', value)}
        />

        <Button
          icon={{ name: 'ios-create-outline', type: 'ionicon' }}
          title='Edit account'
          onPress={this.editAccount}
          buttonStyle={styles.EditButton}
          disabledStyle={styles.DisabledButton}
          disabled={isDisabled}
        />

        <Button
          icon={{ name: 'ios-trash-outline', type: 'ionicon' }}
          title='Delete account'
          onPress={this.showActionSheet}
          buttonStyle={styles.DeleteButton}
        />

        <SimplePicker
          ref={p => this._picker = p}
          options={banks}
          onSubmit={value => this.handleChangeInput('bankName', value)}
          confirmText="Select"
        />
      </ScrollView>
    )
  }
}

const mapStateToProps = ({ accounts }, { route: { params } }) => ({
  account: get(accounts, 'accounts', []).find(({ _id }) => _id === params._id),
})

export default connect(mapStateToProps)(EditAccount)
