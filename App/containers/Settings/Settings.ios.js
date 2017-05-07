import React from 'react'
import { View, Text } from 'react-native'

import styles from './Settings.styles'

const Settings = () => (
  <View style={styles.Settings}>
    <Text style={styles.Text}>Coming Soon...</Text>
  </View>
)

Settings.route = {
  navigationBar: { title: 'Settings' },
}

export default Settings
