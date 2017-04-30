const setNavBar = config => async dispatch =>
  dispatch({
    type: 'SET_NAVBAR_CONFIG',
    data: { ...config },
  })

export default {
  setNavBar,
}
