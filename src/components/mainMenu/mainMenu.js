import React, { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import Button from '../button/button'
import StyledMainMenu from './styledMainMenu'

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const renderMenuItem = (item) => (
    <li className="m-4" key={item.url}>
      <Link to={item.url}>{item.label}</Link>
    </li>
  )

  const toggleMenu = () => {
    const currentMenuState = isMenuOpen
    setIsMenuOpen(!currentMenuState)
  }

  const menu = [
    { label: 'Home', url: '/'},
    { label: 'Projects', url: '/projects/'},
    { label: 'About', url: '/about/'},
    { label: 'Blog', url: '/blog/'},
    { label: 'Contact', url: '/contact/'},
  ]

  return (
    <StyledMainMenu className={classNames(isMenuOpen ? 'show' : '')}>
      <div className='main-bar p-4 not-full-width block-center'>
        <Link to='/'>
          <Button className='brand uppercase'>Ian Holden</Button>
        </Link>
        <Button onClick={toggleMenu}>
          <div className='nav-icon'><div></div></div>
        </Button>
      </div>
      <div className='menu-items bg-white text-center'>
        <div className='not-full-width block-center'>
          <ul className="m-0">
            {menu.map(item => renderMenuItem(item))}
          </ul>
        </div>
      </div>
    </StyledMainMenu>
  )
}

export default MainMenu
