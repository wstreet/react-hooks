const lastStates = []
let index = 0

function useState(initialState) {
  lastStates[index] = lastStates[index] || initialState
  const currentIndex = index
  function setState(nextState) {
    lastStates[currentIndex] = nextState

    // render()
  }
  return [lastStates[index++], setState]
}