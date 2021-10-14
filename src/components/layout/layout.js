import React from 'react'
import Header from '../header/header'
import FooterComponent from '../footer/footer'
import CookieNotice from '../cookieNotice/cookieNotice'

import '../../index.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterComponent />
      <CookieNotice />
    </>
  )
}

export default Layout
