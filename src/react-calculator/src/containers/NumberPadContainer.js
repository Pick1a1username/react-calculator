import { connect } from 'react-redux'
import { addValue } from '../actions'
import NumberPad from '../components/NumberPad'

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addValue: value => {
      dispatch(addValue(value))
    }
  }
}

const NumberPadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberPad)

export default NumberPadContainer