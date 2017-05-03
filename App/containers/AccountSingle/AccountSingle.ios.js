import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'

import router from '../../router'

import SettingsNavBar from '../../components/SettingsNavBar'

import styles from './AccountSingle.styles'

class AccountSingle extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  static route = {
    navigationBar: {
      title: ({ accountName }) => accountName,
      renderRight: ({ params }) => (
        <SettingsNavBar
          icon="ios-settings"
          params={params}
          routeName="EditAccount"
        />
      ),
    },
  }

  render () {
    const { navigator, account: { _id, amount, data } } = this.props

    return (
      <View style={styles.AccountSingle}>
        <View style={styles.total}>
          <Text style={styles.totalText}>
            Hey ! You have {amount.toFixed(2)} € on this account !
          </Text>
        </View>

        <Button
          icon={{ name: 'ios-add-circle-outline', type: 'ionicon' }}
          title='Add new operation'
          onPress={() => navigator.push(router.getRoute('AddNewOperation', { _id }))}
          buttonStyle={styles.AddButton}
        />

        <ScrollView style={styles.data}>
          {!isEmpty(data) && (
            <List containerStyle={styles.OperationsList}>
              {data.map(({ _id, label, category, type, amount = 0, date }) => (
                <ListItem
                  key={_id}
                  containerStyle={styles.ListItem}
                  title={label}
                  subtitle={date || category}
                  rightTitle={type === 'credit' ? `+${amount.toFixed(2)} €` : `${amount.toFixed(2)} €`}
                  hideChevron
                />
              ))}
            </List>
          )}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ accounts }, { route: { params } }) => ({
  account: get(accounts, 'accounts', []).find(({ _id }) => _id === params._id),
})

export default connect(mapStateToProps)(AccountSingle)
