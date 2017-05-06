import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { connect } from 'react-redux'
import _ from 'lodash'

import colors from '../../styles/shared/statsColors.styles'

import styles from './Stats.styles'

const Stats = ({ accounts }) => {
  const stats = _(accounts)
    .map(({ data }) => data)
    .flatMapDeep()
    .filter(({ type }) => type === 'debit')
    .map(({ category, amount }) => ({ category, amount: Math.abs(amount) }))
    .groupBy('category')
    .reduce((acc, operation, category) =>
      _.set(acc, [category], _.sum(operation.map(({ amount }) => amount)))
    , {})

  const series = _.map(stats, amount => amount)
  const sliceColors = Object.keys(stats).map(category => colors[category])
  const total = _.sum(series)
  const shares = _.map(stats, amount => amount / total * 100 | 0)

  return (
    <View style={styles.Stats}>
      {/* <Text style={styles.title}>Debit</Text> */}
      <PieChart
        chart_wh={250}
        series={series}
        sliceColor={sliceColors}
      />
      <View style={styles.legend}>
        {Object.entries(stats).map(([category, amount], index) => (
          <View style={styles.row} key={index}>
            <View style={styles[category]} />
            <View style={styles.category}>
              <Text style={styles.left}>{category} : {amount} €</Text>
              <Text style={styles.right}>({shares[index]} %)</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

Stats.propTypes = {
  accounts: PropTypes.array.isRequired,
}

Stats.route = {
  navigationBar: { title: 'Account stats' }
}

const mapStateToProps = ({ accounts }) => ({
  accounts: _.get(accounts, 'accounts', []),
})

export default connect(mapStateToProps)(Stats)
