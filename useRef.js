let lastRef

function useRef(initialRef) {
  lastRef = lastRef || initialRef
  return {
    current: lastRef
  }
}