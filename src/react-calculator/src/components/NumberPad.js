import React from 'react'
import PropTypes from 'prop-types'

const NumberPad = ({ addValue, typeValue }) => (
    <div>
        <button onClick={e => addValue(1)}>+1</button>
        <button>-1</button><br />
        <button onClick={e => typeValue(1)}>1</button>
        <button onClick={e => typeValue(2)}>2</button>
        <button onClick={e => typeValue(3)}>3</button>
        <button onClick={e => typeValue(4)}>4</button>
        <button onClick={e => typeValue(5)}>5</button>
        <button onClick={e => typeValue(6)}>6</button>
        <button onClick={e => typeValue(7)}>7</button>
        <button onClick={e => typeValue(8)}>8</button>
        <button onClick={e => typeValue(9)}>9</button>
        <button onClick={e => typeValue(0)}>0</button><br />
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
    </div>
)

NumberPad.propTypes = {
  addValue: PropTypes.func.isRequired,
}

export default NumberPad