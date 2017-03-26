const setAccount = account => async dispatch =>
  dispatch({
    type: 'ADD_NEW_ACCOUNT',
    data: account,
  })

export default {
  setAccount,
};
