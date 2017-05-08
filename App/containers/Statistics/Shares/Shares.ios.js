import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Dimensions } from 'react-native'
import PieChart from 'react-native-pie-chart'
import _ from 'lodash'

import statsColors from '../../../styles/shared/statsColors.styles'
import styles from './Shares.styles'

const Shares = ({ data }) => {
  const stats = _(data)
    .groupBy('category')
    .reduce((acc, operation, category) =>
      _.set(acc, [category], _.sum(operation.map(({ amount }) => amount)))
    , {})

  const series = _.map(stats, amount => amount)
  const sliceColors = Object.keys(stats).map(category => statsColors[category])
  const total = _.sum(series)
  const shares = _.map(stats, amount => amount / total * 100 | 0)

  return (
    <View style={styles.Shares}>
      <PieChart
        chart_wh={Dimensions.get('window').width - 80}
        series={series}
        sliceColor={sliceColors}
      />
      <View style={styles.legend}>
        {Object.entries(stats).map(([category, amount], index) => (
          <View style={styles.row} key={index}>
            <View style={styles[category]} />
            <View style={styles.category}>
              <Text style={styles.left}>{category} : {amount} € ({shares[index]} %)</Text>
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
