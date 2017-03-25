import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Text, Button, TextInput } from 'react-native'
import { isEmpty } from 'lodash'

import { setAccount } from '../../actions/storage'

import styles from './AddNewAccount.styles'

class AddNewAccount extends Component {
  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  }

  initialState  = {
    accountName: '',
    bankName: '',
    amount: 0,
  }

  state = this.initialState

  componentWillMount () {
    this.setState(this.initialState)
  }

  handleChangeInput = (key, value) => this.setState({ [key]: value })

  addNewAccount = async () => {
    await setAccount(this.state)
    await this.setState(this.initialState)

    this.props.navigator.pop() // Push to single account details
  }

  render () {
    const { accountName, bankName, amount } = this.state
    const isDisabled = isEmpty(accountName) || isEmpty(bankName)

    return (
      <ScrollView
        alignItems="center"
        justifyContent="top"
        style={styles.AddNewAccount}
      >
        <View style={styles.container}>
          <Text style={styles.label}>Nom de la banque</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => this.handleChangeInput('bankName', value)}
            value={bankName}
          />
          <Text style={styles.label}>Nom du compte</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => this.handleChangeInput('accountName', value)}
            value={accountName}
          />
          <Text style={styles.label}>Montant de départ</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => this.handleChangeInput('amount', value)}
            value={amount.toString()}
            keyboardType="decimal-pad"
          />
          <Button
            title="Ajouter un compte"
            onPress={this.addNewAccount}
            disabled={isDisabled}
          />
        </View>
      </ScrollView>
    )
  }
}

export default AddNewAccount
