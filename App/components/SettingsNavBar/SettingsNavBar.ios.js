import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withNavigation } from '@expo/ex-navigation'
// import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'

import router from '../../router'

import styles from './SettingsNavBar.styles'

@withNavigation
class SettingsNavBar extends Component {
  // componentWillMount () {
  //   console.log('TEST', this.props.navigator.getCurrentIndex())
  // }

  render () {
    const { navigator, _id } = this.props

    return (
      <Icon
        name="ios-settings"
        type="ionicon"
        iconStyle={styles.Icon}
        onPress={() => navigator.push(router.getRoute('EditAccount', { _id }))}
      />
    )
  }
}

export default SettingsNavBar
