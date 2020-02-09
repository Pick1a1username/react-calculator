import { connect } from 'react-redux'
import { addValue } from '../actions'
import { typeValue } from '../actions'
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
    }
  }
}

const NumberPadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberPad)

export default NumberPadContainer