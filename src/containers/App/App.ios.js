import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StatusBar, Text, View, Button } from 'react-native'

import styles from './App.styles'

class App extends Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>Bonsoir</Text>
        <Button
          onPress={() => navigate('Home')}
          title="Homepage"
        />
      </View>
    )
  }
}

export default App
