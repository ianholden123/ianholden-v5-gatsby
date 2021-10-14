import React, { useState } from 'react'
import { Link } from 'gatsby'
import { setCookie, hasCookie } from '../../utils'
import config from '../../../config'
import './cookieNotice.css'

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
      <div className='cookie-notice bg-light-grey w-100'>
        <div className='p-4 not-full-width block-center grid two-col'>
          <p>
            This site uses cookies. Close this dialog to confirm you are happy to continue or find out more in my <Link to='/cookie-policy'>cookie policy document</Link>.
          </p>
          <button className='uppercase' onClick={dismissCookieNotice}>Agree and Close</button>
        </div>
      </div>
    )
  )
}

export default CookieNotice
