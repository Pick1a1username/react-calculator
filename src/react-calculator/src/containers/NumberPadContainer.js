import { connect } from 'react-redux'
import { addValue, typeValue, calculate, Operators } from '../actions'
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
    }
  }
}

const NumberPadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberPad)

export default NumberPadContainer