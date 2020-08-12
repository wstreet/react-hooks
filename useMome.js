import { isChanged } from './utils'

let lastMemo
let lastDependencies

function useMemo(callback, dependencies) {
  if (lastDependencies) {
    if (isChanged(lastDependencies, dependencies)) {
      lastMemo = callback()
      lastDependencies = dependencies
    }
  } else {
    lastMemo = callback()
    lastDependencies = dependencies
  }
}