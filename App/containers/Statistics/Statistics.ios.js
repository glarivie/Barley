import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { connect } from 'react-redux'
import _ from 'lodash'

import colors from '../../styles/shared/variables.styles'

import Shares from './Shares'
import Trends from './Trends'

import styles from './Statistics.styles'

class Statistics extends Component {
  static propTypes = {
    prepared: PropTypes.object.isRequired,
    available: PropTypes.number.isRequired,
  }

  static route = {
    navigationBar: { title: 'Account statistics' },
  }

  state = {
    tabs: ['Shares', 'Trends'],
    current: 0,
  }

  _handleChangeTab = index => this.setState({ current: index })

  _displayTab = () => {
    const { current, tabs } = this.state
    const { prepared, available } = this.props
    const shareData = prepared
      .filter(({ type }) => type === 'debit')
      .map(({ date, category, amount }) => ({ date, category, amount: Math.abs(amount) }))

    switch (tabs[current]) {
      case 'Shares':
        return <Shares data={shareData} />
      case 'Trends':
        return <Trends data={prepared} available={available} />
      default:
        return <Shares data={prepared} />
    }
  }

  render () {
    const { current, tabs } = this.state

    return (
      <ScrollView style={styles.Statistics}>
        <ButtonGroup
          buttons={tabs}
          onPress={this._handleChangeTab}
          selectedIndex={current}
          containerStyle={styles.ButtonsGroup}
          buttonStyle={styles.TypeButtons}
          selectedBackgroundColor={colors.pistache}
          selectedTextStyle={styles.selectedText}
          innerBorderStyle={styles.innerBorder}
        />
        {this._displayTab()}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const accounts = _.get(state.accounts, 'accounts', [])

  return ({
    prepared: _(accounts)
      .map(({ data }) => data)
      .flatMapDeep(),
    available: _(accounts)
      .map(({ amount }) => amount)
      .sum()
  })
}

export default connect(mapStateToProps)(Statistics)
