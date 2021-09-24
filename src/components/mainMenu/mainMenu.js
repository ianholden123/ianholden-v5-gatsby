import React, { useState } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import './mainMenu.css'

const MainMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const renderMenuItem = (item) => (
    <li className="m-4" key={item.id}>
      <Link to={item.url}>{item.label}</Link>
    </li>
  )

  const toggleMenu = () => {
    const currentMenuState = isMenuOpen
    setIsMenuOpen(!currentMenuState)
  }

  const menu = [
    { id: 0, label: 'Home', url: '/'},
    { id: 1, label: 'Projects', url: '/projects/'},
    { id: 2, label: 'About', url: '/about/'},
    { id: 3, label: 'Blog', url: '/blog/'},
    { id: 4, label: 'Contact', url: '/contact/'},
  ]

  return (
    <nav className={classNames('primary-navigation', isMenuOpen ? 'show' : '')}>
      <div className='main-bar p-4 not-full-width block-center'>
        <Link to='/'>
          <button className='brand uppercase'>Ian Holden</button>
        </Link>
        <button onClick={toggleMenu}>
          <div className='nav-icon'><div></div></div>
        </button>
      </div>
      <div className='menu-items bg-white text-center'>
        <div className='not-full-width block-center'>
          <ul className="m-0">
            {menu.map(item => renderMenuItem(item))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainMenu
