import { get } from 'lodash'

const accountsReducer = (state = {}, { type, data }) => {
  switch (type) {
    case 'EDIT_ACCOUNT': {
      const accounts = get(state, 'accounts', [])
      const _id = accounts.findIndex(({ _id }) => _id === get(data, '_id', 0))

      accounts[_id] = data

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
    case 'DELETE_OPERATION': {
      const accountID = get(data, 'accountID', 0)
      const operationID = get(data, 'operationID', 0)
      const accounts = get(state, 'accounts', [])
      const account = accounts.find(({ _id }) => _id === accountID)
      const operation = account.data.find(({ _id }) => _id === operationID)

      return ({
        ...state,
        accounts: accounts.map((account, index) => {
          if (account._id !== accountID) return account

          return ({
            ...account,
            amount: account.amount - operation.amount,
            data: account.data.filter(({ _id }) => _id !== operation._id),
          })
        })
      })
    }
    default:
      return state
  }
}

export default accountsReducer
