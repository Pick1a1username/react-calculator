import React from 'react'
import PropTypes from 'prop-types'

const Display = ({ value }) => (
  <p>
      {value}
  </p>
)

Display.propTypes = {
  value: PropTypes.number.isRequired,
}

export default Display