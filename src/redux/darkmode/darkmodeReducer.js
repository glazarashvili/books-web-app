import { SET_DARK_MODE } from './darkmodeActionTypes'

const initialState = { toggle: false }

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
