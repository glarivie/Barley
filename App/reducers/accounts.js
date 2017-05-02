import { get } from 'lodash'

import { uniqueID } from '../helpers'

const accountsReducer = (state = {}, { type, data }) => {
  switch (type) {
    case 'ADD_NEW_ACCOUNT':
      return ({
        ...state,
        accounts: [
          ...get(state, 'accounts', []), {
            ...data,
            _id: uniqueID(),
            data: [],
          },
        ],
      })
    case 'EDIT_ACCOUNT': {
      const accounts = get(state, 'accounts', [])
      const _id = accounts.findIndex(({ _id }) => _id === get(data, '_id', 0))

      accounts[_id] = data

      return ({
        ...state,
        ...accounts,
      })
    }
    case 'ADD_NEW_OPERATION': {
      const accounts = get(state, 'accounts', [])
      const _id = accounts.findIndex(({ _id }) => _id === get(data, '_id', 0))
      const operation = get(data, 'operation', {})

      if (_id !== -1) {
        accounts[_id].data.unshift({
          ...operation,
          _id: uniqueID(),
        })
        accounts[_id].amount += operation.amount
      }

      return ({
        ...state,
        ...accounts,
      })
    }
    case 'DELETE_ACCOUNT':
      return ({
        ...state,
        accounts: [
          ...get(state, 'accounts', []).filter(({ _id }) => _id !== data)
        ],
      })
    default:
      return state
  }
}

export default accountsReducer
