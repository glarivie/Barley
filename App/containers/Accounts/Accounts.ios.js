import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'

import INGLogo from '../../assets/ing-logo.png'
import router from '../../router'

import styles from './Accounts.styles'

const Accounts = ({ accounts, navigator }) => (
  <View style={styles.Home}>
    {!isEmpty(accounts) && (
      <List containerStyle={styles.AccountsList}>
        {accounts.map(({ _id, bankName, accountName, amount = 0 }) => (
          <ListItem
            key={_id}
            containerStyle={styles.ListItem}
            title={bankName}
            subtitle={accountName}
            avatar={INGLogo}
            rightTitle={`${amount} €`}
            onPress={() => navigator.push(router.getRoute('AccountSingle', { _id, accountName }))}
            roundAvatar
          />
        ))}
      </List>
    )}

    <Button
      icon={{ name: 'ios-add-circle-outline', type: 'ionicon' }}
      title='Add an account'
      onPress={() => navigator.push('AddNewAccount')}
      buttonStyle={styles.AddButton}
    />

    {isEmpty(accounts) && (
      <View style={styles.infos}>
        <Text style={styles.instructions}>
          Add an account before using app functionnalities
        </Text>
      </View>
    )}
  </View>
)

Accounts.propTypes = {
  dispatch: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  navigator: PropTypes.object.isRequired,
}

Accounts.route = {
  navigationBar: { title: 'Accounts' },
}

const mapStateToProps = ({ accounts }) => ({
  accounts: get(accounts, 'accounts', []),
})

export default connect(mapStateToProps)(Accounts)
