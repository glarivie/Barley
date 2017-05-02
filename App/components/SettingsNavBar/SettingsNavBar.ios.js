import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withNavigation } from '@expo/ex-navigation'
import { Icon } from 'react-native-elements'

import router from '../../router'

import styles from './SettingsNavBar.styles'

@withNavigation
class SettingsNavBar extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    params: PropTypes.object.isRequired,
    routeName: PropTypes.string.isRequired,
  }

  render () {
    const { navigator, params, icon, routeName } = this.props

    return (
      <Icon
        name={icon}
        type="ionicon"
        iconStyle={styles.Icon}
        onPress={() => navigator.push(router.getRoute(routeName, { ...params }))}
      />
    )
  }
}

export default SettingsNavBar
