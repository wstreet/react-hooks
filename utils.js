export function isChanged(lastDeps, deps) {
  const changed = !lastDeps.every((dep, idx) => {
    return dep === deps[idx]
  })
  return changed
}