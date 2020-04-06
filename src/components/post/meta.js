import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import config from '../../config'
import CategoryIcon from '../icons/category'
import TagIcon from '../icons/tag'
import { createLocalLink } from '../../utils'

const MetaComponent = ({ author, date, modified, categories, tags }) => {
  const renderMeta = ({ author, date, modified }) => {
    const fullName = author && `${author.firstName} ${author.lastName}`
    const hasBeenModified = moment(date).diff(moment(modified)) < -24 // Only deem as modified if modification has happened more than 24 hours of publish date

    if (author || date || modified) {
      return (
        <ul className="meta m-0 mb-3 mr-4 ml-0">
          {fullName && config.postsShowAuthor && (
            <li className="m-0">Written by {fullName}</li>
          )}
          {!hasBeenModified && date && (
            <li className="m-0">
              Published {moment(date).format('MMMM Do YYYY')}
            </li>
          )}
          {hasBeenModified && modified && (
            <li className="m-0">
              Updated {moment(modified).format('MMMM Do YYYY')}
            </li>
          )}
        </ul>
      )
    }
    return ''
  }

  const renderCategories = categories => {
    if (!categories) return ''
    const fetchedCategories = categories.nodes || categories.edges || []
    if (fetchedCategories.length === 0) return ''
    return (
      <ul className='category m-0 mb-3 mr-4 ml-0'>
        <CategoryIcon />
        {fetchedCategories.map(category => {
          const fetchedCategory = category.node || category
          const { name, uri, id } = fetchedCategory
          return (
            <li key={id} className='m-0 capitalize'>
              <Link to={`/blog/${createLocalLink(uri)}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderTags = tags => {
    if (!tags) return ''
    const fetchedTags = tags.nodes || tags.edges || []
    if (fetchedTags.length === 0) return ''
    return (
      <ul className='tags m-0 mb-3 mr-4 ml-0'>
        <TagIcon />
        {fetchedTags.map(tag => {
          const fetchedTag = tag.node || tag
          const { name, uri, id } = fetchedTag
          return (
            <li key={id} className='m-0 capitalize'>
              <Link to={`/blog/${createLocalLink(uri)}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="meta f-6 color-grey">
      {renderMeta({ author, date, modified })}
      {renderCategories(categories)}
      {renderTags(tags)}
    </div>
  )
}

MetaComponent.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  date: PropTypes.string,
  modified: PropTypes.string,
  categories: PropTypes.oneOfType([
    PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
            uri: PropTypes.string
          })
        })
      )
    }),
    PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          uri: PropTypes.string
        })
      )
    })
  ]),
  tags: PropTypes.oneOfType([
    PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string,
            uri: PropTypes.string,
            id: PropTypes.string
          })
        })
      )
    }),
    PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          uri: PropTypes.string,
          id: PropTypes.string
        })
      )
    })
  ])
}

export default MetaComponent
