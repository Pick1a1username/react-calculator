import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = state => {
  console.log(state)
  return {
    value: state.numberDisplayed
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