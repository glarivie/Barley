import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions } from 'react-native'
import PieChart from 'react-native-pie-chart'
import _ from 'lodash'
import R from 'ramda'

import statsColors from '../../../styles/shared/statsColors.styles'
import styles from './Shares.styles'

const Shares = ({ data }) => {
  const stats = _(data)
    .groupBy('category')
    .map((operation, category) => ({
      category,
      amount: R.sum(R.pluck('amount', operation)),
    }))
    .sortBy('amount')
    .reverse()
    .value()

  const series = R.pluck('amount', stats)
  const sliceColors = stats.map(({ category }) => statsColors[category])
  const total = R.sum(series)
  const shares = stats.map(({ amount }) => amount / total * 100 | 0)

  return (
    <View style={styles.Shares}>
      <PieChart
        chart_wh={Dimensions.get('window').width - 80}
        series={series}
        sliceColor={sliceColors}
        coverRadius={0.45}
        coverFill={'#FFF'}
        doughnut
      />
      <View style={styles.legend}>
        {stats.map(({ category, amount }, index) => (
          <View style={styles.row} key={index}>
            <View style={styles[category]} />
            <View style={styles.category}>
              <Text style={styles.left}>{category} : {amount.toFixed(2)} € ({shares[index]} %)</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

Shares.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Shares
