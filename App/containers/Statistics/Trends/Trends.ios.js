import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { endOfMonth, differenceInCalendarDays, getDate } from 'date-fns'
import _ from 'lodash'

import styles from './Trends.styles'

const Trends = ({ data, available }) => {
  const debitByDay = _(data)
    .groupBy('date')
    .mapValues(value => _.sum(value.map(({ amount }) => -amount)))
    .values()
    .value()

  const meanByDay = _(getDate(new Date()))
    .range()
    .map(index => _.get(debitByDay, [index], 0))
    .sort((a, b) => a - b)
    .slice(1, -1) // Remove min and max
    .mean()

  const daysLeftInMonth = differenceInCalendarDays(
    endOfMonth(new Date()),
    new Date(),
  )

  const dayLeftBeforeBankruptcy = available / meanByDay | 1

  return (
    <View style={styles.Trends}>
      <Text style={styles.big}>{available.toFixed(2)} €</Text>
      <Text style={styles.margin}>Total available</Text>
      <Text style={styles.big}>{meanByDay.toFixed(2)} €</Text>
      <Text style={styles.margin}>Spent by day</Text>
      <Text style={styles.big}>{debitByDay[0].toFixed(2)} €</Text>
      <Text style={styles.margin}>Spent today</Text>
      <Text style={styles.big}>{dayLeftBeforeBankruptcy}</Text>
      <Text style={styles.color}>Day(s) left before bankruptcy</Text>
      <Text style={styles.color}>{daysLeftInMonth} day(s) left in month</Text>
    </View>
  )
}

Trends.propTypes = {
  data: PropTypes.object.isRequired,
  available: PropTypes.number.isRequired,
}

export default Trends
