import React from 'react'
import PropTypes from 'prop-types'

const NumberPad = ({ addValue }) => (
    <div>
        <button onClick={e => {
            e.preventDefault()
            addValue(1)
        }}>+1</button>
        <button>-1</button>
    </div>
)

NumberPad.propTypes = {
  addValue: PropTypes.func.isRequired,
}

export default NumberPad