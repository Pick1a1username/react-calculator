import { connect } from 'react-redux'
import { typeValue, calculate, ac, c, Operators } from '../actions'
import NumberPad from '../components/NumberPad'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    typeValue: value => {
      dispatch(typeValue(value))
    },
    addition: () => {
      dispatch(calculate(Operators.ADDITION))
    },
    substraction: () => {
      dispatch(calculate(Operators.SUBSTRACTION))
    },
    multiplication: () => {
      dispatch(calculate(Operators.MULTIPLICATION))
    },
    division: () => {
      dispatch(calculate(Operators.DIVISION))
    },
    equal: () => {
      dispatch(calculate(Operators.EQUAL))
    },
    ac: () => {
      dispatch(ac())
    },
    c: () => {
      dispatch(c())
    }
  }
}

const NumberPadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberPad)

export default NumberPadContainer