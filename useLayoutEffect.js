import { isChanged } from './utils'

let lastDependencies

// callback在render之后，浏览器渲染之前执行
function useLayoutEffect(callback, dependencies) {
  if (lastDependencies) {
    

    if (isChanged(lastDependencies, dependencies)) { // 依赖项改变了， 返回新的callback
      Promise.resolve().then(callback)
      // 或者
      // queueMicrotask(callback)
      lastDependencies = dependencies
    }
  } else { // 没有依赖项， 每次返回新的callback
    Promise.resolve().then(callback)
      // 或者
      // queueMicrotask(callback)
    lastDependencies = dependencies
  }
  return lastCallback
}