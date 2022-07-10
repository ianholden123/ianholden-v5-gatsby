import React from 'react'
import { ThemeProvider } from 'styled-components';
import theme from '../../config/theme';
import GlobalStyle from '../../GlobalStyles'
import MainMenu from '../mainMenu/mainMenu'
import FooterComponent from '../footer/footer'
import CookieNotice from '../cookieNotice/cookieNotice'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>
        <MainMenu />
      </header>
      <main>
        {children}
      </main>
      <FooterComponent />
      <CookieNotice />
    </ThemeProvider>
  )
}

export default Layout