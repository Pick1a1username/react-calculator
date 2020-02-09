import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = state => {
  return {
    value: state.numberDisplayed.rightValue
  }
}

const mapDispatchToProps = () => {
  return {}
}


const DisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Display)

export default DisplayContainer