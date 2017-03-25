import React, { Component, PropTypes } from 'react'
import { View, ScrollView, TouchableHighlight, Text, Button } from 'react-native'

import AddNewAccount from '../AddNewAccount'

import { getAccounts } from '../../actions/storage'

import styles from './Home.styles'

class Home extends Component {
  static propTypes = {
    title: PropTypes.string,
    navigator: PropTypes.object.isRequired,
  }

  state = {
    isOpenModal: false,
    accounts: [],
  }

  componentDidMount () {
    getAccounts().then(accounts => this.setState({ accounts }))
  }

  viewAddNewAcount = () =>
    this.props.navigator.push({
      component: AddNewAccount,
      title: 'Ajouter',
    })

  viewSingleAccountDetails = account =>
    this.props.navigator.push({
      component: Home,
      title: 'Bonsoir',
    })

  render () {
    const { accounts } = this.state

    return (
      <ScrollView
        alignItems="center"
        justifyContent="top"
        style={styles.Home}
      >
        <View style={styles.accounts}>
          {accounts.map(({ _id, accountName, bankName, amount = 0 }, index) => (
            <TouchableHighlight
              key={_id}
              onPress={() => this.viewSingleAccountDetails(accounts[index])}
              style={styles.single}
            >
              <Text style={styles.text}>{bankName} {accountName} {amount} €</Text>
            </TouchableHighlight>
          ))}
          <Button
            title="Ajouter un compte"
            onPress={this.viewAddNewAcount}
          />
        </View>
      </ScrollView>
    )
  }
}

export default Home
