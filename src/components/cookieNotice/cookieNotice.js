import React, { useState } from 'react'
import { Link } from 'gatsby'
import { setCookie, hasCookie } from '../../utils'
import config from '../../config'
import StyledCookieNotice from './styledCookieNotice'

const CookieNotice = () => {
  const [hasBeenDismissed, setHasBeenDismissed] = useState(hasCookie(config.cookieNoticeCookieName))

  const dismissCookieNotice = () => {
    setCookie(config.cookieNoticeCookieName, 'true')
    setHasBeenDismissed(true)
  }

  return (
    hasBeenDismissed ? (
      ''
    ) : (
      <StyledCookieNotice className='bg-light-grey w-100'>
        <div className='p-4 not-full-width block-center'>
          <p>
            This site uses cookies. Close this dialog to confirm you are happy to continue or find out more in my <Link to='/cookie-policy'>cookie policy document</Link>.
          </p>
          <button className='uppercase' onClick={dismissCookieNotice}>Agree and Close</button>
        </div>
      </StyledCookieNotice>
    )
  )
}

export default CookieNotice
