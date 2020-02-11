import React from 'react'
import PropTypes from 'prop-types'

import './TextAreaDisplay.css'

// https://stackoverflow.com/questions/33245017/react-modifying-textarea-values
const TextAreaDisplay = ({ value }) => (
  <textarea className="display" rows="1" cols="20" value={value}/>
)

TextAreaDisplay.propTypes = {
  value: PropTypes.number.isRequired,
}

export default TextAreaDisplay