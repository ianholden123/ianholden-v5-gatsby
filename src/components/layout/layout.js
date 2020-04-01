import React from 'react'
import PropTypes from 'prop-types'
import Header from '../header/header'
import FooterComponent from '../footer/footer'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterComponent />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
