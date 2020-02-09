const numberDisplayed = (currentNumber = 0, action) => {
    switch (action.type) {
      case 'ADD_VALUE':
          console.log(`${currentNumber} + ${action.value}`)
        return currentNumber + action.value
      case 'TYPE_VALUE':
        return parseInt(`${currentNumber}${action.value}`)
      default:
        return currentNumber
    }
  }
export default numberDisplayed