import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

import styles from './NavArrow.styles'

const NavArrow = ({ title, type = 'back', onPress }) => (
  <View style={styles.View}>
    {(type === 'forward' && !!title) && <Text style={styles.Text}>{title}</Text>}
    <Icon
      name={type === 'back' ? 'ios-arrow-back' : 'ios-arrow-forward'}
      type='ionicon'
      iconStyle={styles.Icon}
    />
    {(type === 'back' && !!title) && <Text style={styles.Text}>{title}</Text>}
  </View>
)

NavArrow.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['back', 'forward']).isRequired,
  onPress: PropTypes.func,
}

export default NavArrow
