
let lastState
function useReducer(reducer, initialState) {
  lastState = lastState || initialState
  const dispatch = (action) => {
    lastState = reducer(lastState, action)
    // render()
  }
  return [lastState, dispatch]
}


// useage

const reducer = (state, action) => {
  switch(action.type) {
    case 'add':
      return state + 1
      
    default:
      return state
  }
}

cosnt [state, dispatch]  = useReducer(reducer, 0)