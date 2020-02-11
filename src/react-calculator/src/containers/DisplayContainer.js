import { connect } from 'react-redux'
// import SimpleDisplay from '../components/SimpleDisplay'
import TextAreaDisplay from '../components/TextAreaDisplay'

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
)(TextAreaDisplay)

export default DisplayContainer