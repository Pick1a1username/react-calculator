import { Operators } from '../actions'

const defaultState = {
  leftValue: 0,
  rightValue: 0,
  currentOperator: Operators.EQUAL,
  nextValue: true,
  noOperatorPassed: true
}

const numberDisplayed = ( state = defaultState, action ) => {
  let calculated = 0
  switch (action.type) {
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
            nextValue: true,
            noOperatorPassed: false
          }
        case Operators.SUBSTRACTION:
          calculated = state.leftValue - state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.SUBSTRACTION,
            rightValue: calculated,
            nextValue: true,
            noOperatorPassed: false
          }
        case Operators.MULTIPLICATION:
          if (state.noOperatorPassed) return {
            leftValue: state.rightValue,
            currentOperator: Operators.MULTIPLICATION,
            rightValue: state.rightValue,
            nextValue: true,
            noOperatorPassed: false
          }
          calculated = state.leftValue * state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.MULTIPLICATION,
            rightValue: calculated,
            nextValue: true,
            noOperatorPassed: false
          }
        case Operators.DIVISION:
          if (state.noOperatorPassed) return {
            leftValue: state.rightValue,
            currentOperator: Operators.DIVISION,
            rightValue: state.rightValue,
            nextValue: true,
            noOperatorPassed: false
          }
          calculated = state.leftValue / state.rightValue;
          return {
            leftValue: calculated,
            currentOperator: Operators.DIVISION,
            rightValue: calculated,
            nextValue: true,
            noOperatorPassed: false
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
      return defaultState
    default:
      return state
  }
}

export default numberDisplayed