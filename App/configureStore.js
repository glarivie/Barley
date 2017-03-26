import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { AsyncStorage } from 'react-native'

import reducers from './reducers'

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunkMiddleware),
    autoRehydrate(),
  ),
)

persistStore(store, { storage: AsyncStorage })

export default store
// export default persistStore(store, { storage: AsyncStorage })
