import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'

import styles from './App.styles'

class App extends Component {

  render() {

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>Bonsoir</Text>
      </View>
    )
  }
}

export default App
