import React from 'react'
import { NavigatorIOS } from 'react-native'

import Home from '../Home'

import styles from './Navigator.styles'

const Navigator = () => (
  <NavigatorIOS
    initialRoute={{
      component: Home,
      title: 'Comptes',
    }}
    style={styles.Navigator}
  />
)

export default Navigator
