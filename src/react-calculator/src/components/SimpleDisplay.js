import React from 'react'
import PropTypes from 'prop-types'

const SimpleDisplay = ({ value }) => (
  <p>
      {value}
  </p>
)

SimpleDisplay.propTypes = {
  value: PropTypes.number.isRequired,
}

export default SimpleDisplay