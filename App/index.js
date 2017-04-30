import React from 'react'
import { Provider } from 'react-redux'
import { NavigationProvider, StackNavigation } from '@expo/ex-navigation'
import { StatusBar } from 'react-native'

import store from './configureStore'
import router from './router'

import colors from './styles/shared/variables.styles'

const App = () => (
  <Provider store={store}>
    <NavigationProvider router={router}>
      <StatusBar barStyle="light-content" />
      <StackNavigation
        initialRoute={router.getRoute('Accounts')}
        defaultRouteConfig={{
          navigationBar: {
            backgroundColor: colors.darkblue,
            tintColor: colors.pistache,
          }
        }}
      />
    </NavigationProvider>
  </Provider>
)

export default App
