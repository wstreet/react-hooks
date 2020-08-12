const context = React.createContext()

function useContext(context) {
  return context._currentValue
}