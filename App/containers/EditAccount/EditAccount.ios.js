import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'

import actions from '../../actions'

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

  addNewAccount = () => {
    const { dispatch, navigator } = this.props

    dispatch(actions.accounts.setAccount({
      ...this.state,
      amount: parseFloat(this.state.amount),
    }))
    navigator.pop()
  }

  render () {
    const { accountName, bankName, amount } = this.state
    const isDisabled = isEmpty(accountName) || isEmpty(bankName)

    return (
      <ScrollView style={styles.EditAccount}>
        <FormLabel>Bank name</FormLabel>
        <FormInput
          value={bankName}
          onChangeText={value => this.handleChangeInput('bankName', value)}
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

const mapStateToProps = ({ accounts }, { route: { params } }) => ({
  account: get(accounts, 'accounts', []).find(({ _id }) => _id === params._id),
})

export default connect(mapStateToProps)(EditAccount)
