import { SET_USER } from './userActionTypes'

const loginValue = JSON.parse(localStorage.getItem('isUserLoggedIn'))

const darkmodeReducer = (state = { isUserLoggedIn: loginValue }, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isUserLoggedIn: !state.isUserLoggedIn,
      }

    default:
      return state
  }
}

export default darkmodeReducer
