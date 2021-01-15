import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ color }) => (
  <svg viewBox="0 0 512 512">
    <polygon fill={color} points="339.392,258.624 512,367.744 512,144.896"/>
    <polygon fill={color} points="0,144.896 0,367.744 172.608,258.624"/>
    <path fill={color} d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z"/>
    <path fill={color} d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856 L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"/>
  </svg>
)

Icon.propTypes = {
  color: PropTypes.string.isRequired
}

export default Icon
