import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'

import { App } from './containers'
import store from './configureStore'

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('main', () => Main)
