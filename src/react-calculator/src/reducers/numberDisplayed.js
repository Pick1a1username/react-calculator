import { Operators } from '../actions'

const numberDisplayed = (
  state = {
    leftValue: 0,
    rightValue: 0,
    currentOperator: Operators.EQUAL,
    nextValue: true
  },
  action
  ) => {
  let calculated = 0
  switch (action.type) {
    case 'ADD_VALUE':
      return {
        leftValue: state.rightValue,
        rightValue: state.leftValue + action.value,
        currentOperator: Operators.EQUAL,
        nextValue: false
      }
    case 'TYPE_VALUE':
      if (state.nextValue) return { ...state, rightValue: action.value, nextValue: false }
      return { ...state, rightValue: parseInt(`${state.rightValue}${action.value}`) }
    case 'CALCULATE':
      switch (action.operator) {
        case Operators.ADDITION:
          calculated = state.leftValue + state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.ADDITION,
            rightValue: calculated,
            nextValue: true
          }
        case Operators.SUBSTRACTION:
          calculated = state.leftValue - state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.SUBSTRACTION,
            rightValue: calculated,
            nextValue: true
          }
        case Operators.MULTIPLICATION:
          calculated = state.leftValue * state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.MULTIPLICATION,
            rightValue: calculated,
            nextValue: true
          }
        case Operators.DIVISION:
          calculated = state.leftValue / state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.DIVISION,
            rightValue: calculated,
            nextValue: true
          }
        case Operators.EQUAL:
          if (state.currentOperator === Operators.ADDITION) {
            calculated = state.leftValue + state.rightValue;
            return {
              leftValue: calculated,
              currentOperator: Operators.EQUAL,
              rightValue: calculated,
              nextValue: true
            }
          }
          if (state.currentOperator === Operators.SUBSTRACTION) {
            calculated = state.leftValue - state.rightValue;
            return {
              leftValue: calculated,
              currentOperator: Operators.EQUAL,
              rightValue: calculated,
              nextValue: true
            }
          }
          if (state.currentOperator === Operators.MULTIPLICATION) {
            calculated = state.leftValue * state.rightValue;
            return {
              leftValue: calculated,
              currentOperator: Operators.EQUAL,
              rightValue: calculated,
              nextValue: true
            }
          }
          if (state.currentOperator === Operators.DIVISION) {
            calculated = state.leftValue / state.rightValue;
            return {
              leftValue: calculated,
              currentOperator: Operators.EQUAL,
              rightValue: calculated,
              nextValue: true
            }
          }
          return state;
        default:
          return state
      }
    case 'C':
      return { ...state, rightValue: 0 }
    case 'AC':
      return state = {
        leftValue: 0,
        rightValue: 0,
        currentOperator: Operators.EQUAL,
        nextValue: Boolean
      }
    default:
      return state
  }
}

export default numberDisplayed