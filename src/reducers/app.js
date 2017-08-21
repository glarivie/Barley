// import { get } from 'lodash'

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_NAVBAR_CONFIG':
      return ({
        ...state,
        ...action.data,
      })
    default:
      return state
  }
}

export default appReducer
