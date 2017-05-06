const setAccount = account => async dispatch =>
  dispatch({
    type: 'ADD_NEW_ACCOUNT',
    data: account,
  })

const editAccount = account => async dispatch =>
  dispatch({
    type: 'EDIT_ACCOUNT',
    data: account,
  })

const deleteAccount = accountID => async dispatch =>
  dispatch({
    type: 'DELETE_ACCOUNT',
    data: accountID,
  })

const addNewOperation = (_id, operation) => async dispatch =>
  dispatch({
    type: 'ADD_NEW_OPERATION',
    data: { _id, operation },
  })

export default {
  setAccount,
  editAccount,
  deleteAccount,
  addNewOperation,
}
