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

const tabItemProps = (title, icon) => ({
  id: title,
  title,
  style: styles.TabItem,
  selectedStyle: styles.selectedTabItem,
  renderIcon: isSelected =>
    <Icon
      name={icon}
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

        <TabItem {...tabItemProps('Accounts', 'ios-card')} >
          <StackNavigation {...navigationProps('Accounts')} />
        </TabItem>

        <TabItem {...tabItemProps('Stats', 'ios-pie-outline')} >
          <StackNavigation {...navigationProps('Stats')} />
        </TabItem>

        {/* <TabItem {...tabItemProps('Accounts', 'logo-buffer')} >
          <StackNavigation {...navigationProps('Accounts')} />
        </TabItem> */}

      </TabNavigation>
    </NavigationProvider>
  </Provider>
)

export default App
