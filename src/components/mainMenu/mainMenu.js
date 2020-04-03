import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { createLocalLink } from '../../utils'
import './mainMenu.css'

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

const renderMenuItem = item => {
  let hasChild = false
  if (item.childItems && item.childItems.nodes.length) {
    hasChild = true
  }
  return (
    <li className="my-3 mx-4" key={item.id}>
      <Link to={createLocalLink(item.url)}>{item.label}</Link>
      {hasChild && renderChildMenu(item)}
    </li>
  )
}

const renderChildMenu = item => (
  <ul className="bg-light-grey m-0">
    {item.childItems.nodes.map(child => renderMenuItem(child))}
  </ul>
)

const MainMenu = () => {
  return (
    <StaticQuery
      query={MAIN_MENU_QUERY}
      render={({
        wpgraphql: {
          menuItems: { nodes: menu }
        }
      }) => {
        return (
          <nav className='primary-navigation bg-light-grey'>
            <div className='not-full-width block-center'>
              <ul className="m-0">
                {menu.map(item => renderMenuItem(item))}
              </ul>
            </div>
          </nav>
        )
      }}
    />
  )
}

export default MainMenu
