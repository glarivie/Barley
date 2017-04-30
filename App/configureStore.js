import { createStore, applyMiddleware, compose } from 'redux'
import { createNavigationEnabledStore } from '@expo/ex-navigation'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { AsyncStorage } from 'react-native'

import reducers from './reducers'

const store = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation',
})(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate(),
  ),
)

persistStore(store, { storage: AsyncStorage })

export default store
