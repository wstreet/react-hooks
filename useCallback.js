import { isChanged } from './utils'

let lastCallback
let lastDependencies

function useCallback(callback, dependencies) {
  if (lastDependencies) {
    

    if (isChanged(lastDependencies, dependencies)) { // 依赖项改变了， 返回新的callback
      lastCallback = callback
      lastDependencies = dependencies
    }
  } else { // 没有依赖项， 每次返回新的callback
    lastCallback = callback
    lastDependencies = dependencies
  }
  return lastCallback
}