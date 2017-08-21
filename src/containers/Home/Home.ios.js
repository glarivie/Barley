import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Homepage',
  }

  render () {
    return (
      <View>
        Homepage
      </View>
    )
  }
}

export default Home
