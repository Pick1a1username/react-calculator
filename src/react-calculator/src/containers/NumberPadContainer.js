import { connect } from 'react-redux'
import { addValue, typeValue, calculate, ac, c, Operators } from '../actions'
import NumberPad from '../components/NumberPad'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addValue: value => {
      dispatch(addValue(value))
    },
    typeValue: value => {
      dispatch(typeValue(value))
    },
    addition: () => {
      dispatch(calculate(Operators.ADDITION))
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