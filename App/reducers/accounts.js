import { get } from 'lodash'

import { uniqueID } from '../helpers'

const accountsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NEW_ACCOUNT':
      return {
        ...state,
        accounts: [
          ...get(state, 'accounts', []), {
            ...action.data,
            _id: uniqueID(),
          },
        ]
      }
    default:
      return state
  }
}

export default accountsReducer
