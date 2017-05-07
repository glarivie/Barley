import React from 'react'
import { Provider } from 'react-redux'
import {
  NavigationProvider,
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation'
import { Icon } from 'react-native-elements'
import { StatusBar } from 'react-native'

import store from './configureStore'
import router from './router'

import colors from './styles/shared/variables.styles'
import styles from './styles/index.styles'

const navigationProps = route => ({
  id: route,
  navigatorUID: route,
  initialRoute: router.getRoute(route),
  defaultRouteConfig: {
    navigationBar: {
      backgroundColor: colors.darkblue,
      tintColor: colors.pistache,
    },
  },
})

const tabItemProps = (title, icon, iconSelected) => ({
  id: title,
  title,
  style: styles.TabItem,
  selectedStyle: styles.selectedTabItem,
  renderIcon: isSelected =>
    <Icon
      name={isSelected ? iconSelected : icon}
      type="ionicon"
      iconStyle={isSelected ? styles.IconSelected : styles.Icon}
    />
})

const App = () => (
  <Provider store={store}>
    <NavigationProvider router={router}>
      <StatusBar barStyle="light-content" />
      <TabNavigation
        id="App"
        navigatorUID="App"
        initialTab="Accounts"
        tabBarStyle={styles.TabNavigation}
      >

        <TabItem {...tabItemProps('Accounts', 'ios-card-outline', 'ios-card')} >
          <StackNavigation {...navigationProps('Accounts')} />
        </TabItem>

        <TabItem {...tabItemProps('Statistics', 'ios-pie-outline', 'ios-pie')} >
          <StackNavigation {...navigationProps('Statistics')} />
        </TabItem>

        <TabItem {...tabItemProps('Settings', 'ios-settings-outline', 'ios-settings')} >
          <StackNavigation {...navigationProps('Settings')} />
        </TabItem>

      </TabNavigation>
    </NavigationProvider>
  </Provider>
)

export default App
