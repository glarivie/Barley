import { combineReducers } from 'redux'
import { NavigationReducer as navigation } from '@expo/ex-navigation'

import app from './app'
import accounts from './accounts'

const rootReducer = combineReducers({
  navigation,
  app,
  accounts,
})

export default rootReducer
