import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { createLocalLink } from '../../utils'
import './mainMenu.css'
import classNames from 'classnames'

class MainMenu extends React.Component {
  constructor (props) {
    super(props)

    this.toggleMenu = this.toggleMenu.bind(this)

    this.state = {
      isMenuOpen: false
    }
  }

  renderMenuItem (item) {
    let hasChild = false
    if (item.childItems && item.childItems.nodes.length) {
      hasChild = true
    }
    return (
      <li className="m-4" key={item.id}>
        <Link to={createLocalLink(item.url)}>{item.label}</Link>
        {hasChild && this.renderChildMenu(item)}
      </li>
    )
  }

  renderChildMenu (item) {
    return (
      <ul className="bg-light-grey m-0">
        {item.childItems.nodes.map(child => this.renderMenuItem(child))}
      </ul>
    )
  }

  toggleMenu () {
    const currentMenuState = this.state.isMenuOpen
    this.setState({ isMenuOpen: !currentMenuState })
  }

  render () {
    const MAIN_MENU_QUERY = graphql`
      fragment MenuFields on WPGraphQL_MenuItem {
        id
        label
        url
      }

      query GET_MENU_ITEMS {
        wpgraphql {
          menuItems(where: { location: PRIMARY }) {
            nodes {
              ...MenuFields
              childItems {
                nodes {
                  ...MenuFields
                }
              }
            }
          }
        }
      }
    `

    return (
      <StaticQuery
        query={MAIN_MENU_QUERY}
        render={({
          wpgraphql: {
            menuItems: { nodes: menu }
          }
        }) => {
          return (
            <nav className={classNames('primary-navigation', this.state.isMenuOpen ? 'show' : '')}>
              <div className='main-bar m-3'>
                <Link to={createLocalLink('/')}>
                  <button className='brand bg-white uppercase'>Ian Holden</button>
                </Link>
                <button className='bg-white' onClick={this.toggleMenu}>
                  <div className='nav-icon'><div></div></div>
                </button>
              </div>
              <div className='menu-items bg-white text-center'>
                <div className='not-full-width block-center'>
                  <ul className="m-0">
                    {menu.map(item => this.renderMenuItem(item))}
                  </ul>
                </div>
              </div>
            </nav>
          )
        }}
      />
    )
  }
}

export default MainMenu
