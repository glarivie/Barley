import { combineReducers } from 'redux'

import app from './app'
import accounts from './accounts'

const rootReducer = combineReducers({
  app,
  accounts,
})

export default rootReducer
