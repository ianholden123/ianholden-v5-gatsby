import React, { Component } from 'react'
import { Link } from 'gatsby'
import { setCookie, hasCookie } from '../../utils'
import config from '../../config'
import './cookieNotice.css'

class CookieNotice extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hasBeenDismissed: hasCookie(config.cookieNoticeCookieName)
    }

    this.dismissCookieNotice = this.dismissCookieNotice.bind(this)
  }

  dismissCookieNotice () {
    setCookie(config.cookieNoticeCookieName, 'true')
    this.setState({ hasBeenDismissed: true })
  }

  render () {
    if (!this.state.hasBeenDismissed) {
      return (
        <div className='cookie-notice bg-light-grey w-100'>
          <div className='p-4 not-full-width block-center grid two-col'>
            <p>
              This site uses cookies. Close this dialog to confirm you are happy to continue or find out more in my <Link to='/cookie-policy'>cookie policy document</Link>.
            </p>
            <button onClick={this.dismissCookieNotice}>Agree and Close</button>
          </div>
        </div>
      )
    }
    return ''
  }
}

export default CookieNotice
