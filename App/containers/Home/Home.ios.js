import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { List, ListItem } from 'react-native-elements'
// import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { get } from 'lodash'

import styles from './Home.styles'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    accounts: PropTypes.array.isRequired,
  }

  render () {
    const { accounts } = this.props

    console.log('ACCOUNTS', accounts)

    return (
      <View style={styles.Home}>
        <List containerStyle={{ marginTop: 15 }}>
          {accounts.map(({ _id, bankName, accountName, amount = 0 }) => (
            <ListItem
              // roundAvatar
              // avatar={{uri:l.avatar_url}}
              key={_id}
              title={accountName}
            />
          ))}
        </List>
      </View>
    )
  }
}

const mapStateToProps = ({ accounts }) => ({
  accounts: get(accounts, 'accounts', []),
})

export default connect(mapStateToProps)(Home)
