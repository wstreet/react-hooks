import { isChanged } from './utils'

let lastDependencies

// callback在浏览器渲染完成之后执行
function useEffect(callback, dependencies) {
  if (lastDependencies) {
    

    if (isChanged(lastDependencies, dependencies)) { // 依赖项改变了， 返回新的callback
      setTimeout(callback, 0)
      lastDependencies = dependencies
    }
  } else { // 没有依赖项， 每次返回新的callback
    setTimeout(callback, 0)
    lastDependencies = dependencies
  }
  return lastCallback
}