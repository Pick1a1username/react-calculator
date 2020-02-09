import React from 'react'
import PropTypes from 'prop-types'

const NumberPad = (props) => (
    <div>
        <button onClick={e => props.addValue(1)}>+1</button>
        <button>-1</button><br />
        <button onClick={e => props.typeValue(1)}>1</button>
        <button onClick={e => props.typeValue(2)}>2</button>
        <button onClick={e => props.typeValue(3)}>3</button>
        <button onClick={e => props.typeValue(4)}>4</button>
        <button onClick={e => props.typeValue(5)}>5</button>
        <button onClick={e => props.typeValue(6)}>6</button>
        <button onClick={e => props.typeValue(7)}>7</button>
        <button onClick={e => props.typeValue(8)}>8</button>
        <button onClick={e => props.typeValue(9)}>9</button>
        <button onClick={e => props.typeValue(0)}>0</button><br />
        <button onClick={e => props.addition()}>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button onClick={e => props.equal()}>=</button><br />
        <button onClick={e => props.c()}>C</button>
        <button onClick={e => props.ac()}>AC</button>
    </div>
)

NumberPad.propTypes = {
  addValue: PropTypes.func.isRequired,
}

export default NumberPad