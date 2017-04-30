import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, ScrollView } from 'react-native'
import { List, ListItem, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { get, isEmpty } from 'lodash'

import actions from '../../actions'
import router from '../../router'

import styles from './AccountSingle.styles'

class AccountSingle extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    _id: PropTypes.string.isRequired,
    bankName: PropTypes.string.isRequired,
    accountName: PropTypes.string,
    amount: PropTypes.number,
    data: PropTypes.array,
    navigator: PropTypes.object.isRequired,
  }

  static route = {
    navigationBar: { title: ({ bankName }) => bankName },
  }

  deleteAccount = () => {
    const { _id, dispatch, navigator } = this.props

    dispatch(actions.accounts.deleteAccount(_id))
    navigator.pop()
  }

  render () {
    const { _id, navigator, amount, data } = this.props

    return (
      <View style={styles.AccountSingle}>
        <View style={styles.total}>
          <Text style={styles.totalText}>
            Hey ! You have {amount} € on this account !
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
                  rightTitle={type === 'credit' ? `+${amount} €` : `${amount} €`}
                  // onPress={() => navigator.push(router.getRoute('AccountSingle', { _id, bankName }))}
                  hideChevron
                />
              ))}
            </List>
          )}

          <Button
            icon={{ name: 'ios-trash-outline', type: 'ionicon' }}
            title='Delete account'
            onPress={() => alert('Press this button longer to confirm the delete')}
            onLongPress={this.deleteAccount}
            buttonStyle={styles.DeleteButton}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = ({ accounts }, { route: { params } }) => ({
  ...get(accounts, 'accounts', []).find(({ _id }) => _id === params._id),
})

export default connect(mapStateToProps)(AccountSingle)
