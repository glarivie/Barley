import { StackNavigator } from 'react-navigation'

import {
  App,
  Home,
} from './containers'

const Router = StackNavigator({
  App: { screen: App },
  Home: { screen: Home },
})

export default Router
