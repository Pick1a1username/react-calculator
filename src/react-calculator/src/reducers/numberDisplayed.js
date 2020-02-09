import { Operators } from '../actions'

const numberDisplayed = (state = { leftValue: 0, rightValue: 0, currentOperator: Operators.EQUAL }, action) => {
  console.log(state)
  switch (action.type) {
    case 'ADD_VALUE':
      return {
        leftValue: state.rightValue,
        rightValue: state.leftValue + action.value,
        currentOperator: Operators.EQUAL
      }
    case 'TYPE_VALUE':
      return {
        leftValue: state.leftValue,
        currentOperator: state.currentOperator,
        rightValue: parseInt(`${state.rightValue}${action.value}`)
      }
    case 'CALCULATE':
      switch (action.operator) {
        case Operators.ADDITION:
          return {
            leftValue: state.rightValue,
            currentOperator: Operators.ADDITION,
            rightValue: state.leftValue + state.rightValue
          }
        case Operators.SUBSTRACTION:
          return state
        case Operators.MULTIPLICATION:
          return state
        case Operators.DIVISION:
          return state
        default:
          return state
      }
    default:
      return state
  }
}

export default numberDisplayed