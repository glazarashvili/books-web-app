import { SET_DARK_MODE } from './darkmodeActionTypes'

const isDarkModeActivated = localStorage.getItem('darkModeActivated')

const initialState = { toggle: isDarkModeActivated }

const darkmodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        toggle: !state.toggle,
      }

    default:
      return state
  }
}

export default darkmodeReducer
