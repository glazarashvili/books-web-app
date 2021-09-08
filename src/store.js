import ActionButton from 'antd/lib/modal/ActionButton'
import { createStore } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './redux/rootReducer'

// const middlewares = composeWithDevTools()

const toggleReducer = (state = { toggle: false }, action) => {
  if ((action.type = 'toggle')) {
    return {
      toggle: !state.toggle,
    }
  }

  return state
}

// const store = createStore(rootReducer, middlewares)

const store = createStore(toggleReducer)
export default store
