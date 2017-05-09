import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { endOfMonth, differenceInCalendarDays, getDate } from 'date-fns'
import _ from 'lodash'

import styles from './Trends.styles'

const Trends = ({ data, available }) => {
  const debitByDay = _(data)
    .groupBy('date')
    .reduce((acc, operations) =>
      acc.concat(_.sum(operations.map(({ amount }) => amount)))
    , [])

  const meanByDay = _(getDate(new Date()))
    .range()
    .map(index => debitByDay[index] || 0)
    .sort()
    .slice(1, -1) // Remove min and max
    .groupBy()
    .map(values => values[0])
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
