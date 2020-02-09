import { Operators } from '../actions'

const numberDisplayed = (currentNumber = 0, action) => {
  switch (action.type) {
    case 'ADD_VALUE':
      return currentNumber + action.value
    case 'TYPE_VALUE':
      return parseInt(`${currentNumber}${action.value}`)
    case Operators.ADDITION:
      return currentNumber
    default:
      return currentNumber
  }
}

export default numberDisplayed