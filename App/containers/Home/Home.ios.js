import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import { View, ListView, Row, Icon, Subtitle, NavigationBar, Button } from '@shoutem/ui'
import { Link } from 'react-router-native'
import { connect } from 'react-redux'
import { get } from 'lodash'

import styles from './Home.styles'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    accounts: PropTypes.array.isRequired,
    // navigator: PropTypes.object.isRequired,
  }

  componentDidMount () {
    // getAccounts().then(accounts => this.setState({ accounts }))
  }

  // viewAddNewAcount = () =>
  //   this.props.navigator.push({
  //     component: AddNewAccount,
  //     title: 'Ajouter',
  //   })
  //
  // viewSingleAccountDetails = account =>
  //   this.props.navigator.push({
  //     component: Home,
  //     title: 'Bonsoir',
  //   })

  render () {
    const { accounts } = this.props

    console.log('ACCOUNTS', accounts)

    return (
      <View>
        <View>
          <NavigationBar
            hasHistory
            title="TITLE"
            rightComponent={(
              <Button styleName="clear">
                <Text>Report</Text>
              </Button>
            )}
          />
        </View>
        <View>
          <ListView
            data={accounts}
            // renderHeader={...}
            renderRow={({ _id, accountName, bankName }, index) => (
              <Row styleName="small">
                <Icon name="news" />
                <View styleName="vertical">
                  <Subtitle>{accountName}</Subtitle>
                  <Text numberOfLines={1}>{bankName}</Text>
                </View>
                <Icon styleName="disclosure" name="right-arrow" />
              </Row>
            )}
            renderFooter={() => (
              <Row styleName="small">
                <Icon name="add-event" />
                <View styleName="vertical">
                  <Link to="/account/new">
                    <Text>Ajouter un compte</Text>
                  </Link>
                </View>
              </Row>
            )}
            // renderSectionHeader={...}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({ accounts }) => ({
  accounts: get(accounts, 'accounts', []),
})

export default connect(mapStateToProps)(Home)
