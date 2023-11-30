import React from 'react'
import { Link } from 'gatsby'
import Button from '../button/button'
import StyledMainMenu from './styledMainMenu'

const MainMenu = () => {
  return (
    <StyledMainMenu>
      <div className="main-bar p-4 not-full-width block-center">
        <Link to="/">
          <Button className="brand uppercase">Ian Holden</Button>
        </Link>
        <ul className="m-0 menu-items">
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <Link to="/blog/">Blog</Link>
          </li>
        </ul>
      </div>
    </StyledMainMenu>
  )
}

export default MainMenu
