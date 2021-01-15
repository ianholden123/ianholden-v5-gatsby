import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ color }) => (
  <svg viewBox='0 0 64 58.67'>
    <path fill={color} d='M56,0H45.33a8.05,8.05,0,0,0-6.4,3.2l-5.6,7.47H8a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H56a8,8,0,0,0,8-8V8A8,8,0,0,0,56,0ZM43.2,6.4a2.68,2.68,0,0,1,2.13-1.07H56A2.68,2.68,0,0,1,58.67,8v2.67H40ZM58.67,50.67A2.67,2.67,0,0,1,56,53.33H8a2.67,2.67,0,0,1-2.67-2.66v-32A2.68,2.68,0,0,1,8,16H58.67Z' />
  </svg>
)

Icon.propTypes = {
  color: PropTypes.string.isRequired
}

export default Icon
