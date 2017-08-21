import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'

import store from './configureStore'
import Router from './Router'

const Main = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

AppRegistry.registerComponent('main', () => Main)
