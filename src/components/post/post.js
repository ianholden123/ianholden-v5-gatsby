import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import './post.css'
import { createLocalLink } from '../../utils'
import config from '../../config'
import classNames from 'classnames'

const renderMeta = ({ author, date, modified }) => {
  const fullName = author && `${author.firstName} ${author.lastName}`
  const hasBeenModified = moment(date).diff(moment(modified)) < -24 // Only deem as modified if modification has happened more than 24 hours of publish date

  if (author || date || modified) {
    return (
      <ul className="meta m-0 mb-3 mr-3 ml-0">
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

const renderCategories = (categories, type = 'category') => {
  const fetchedCategories = categories.nodes || categories.edges || []
  if (fetchedCategories.length === 0) return ''
  return (
    <ul className={classNames(type, 'm-0 mb-3 mr-3 ml-0')}>
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

const PostComponent = ({
  author,
  uri,
  title,
  excerpt,
  date,
  modified,
  categories,
  tags
}) => (
  <>
    <h2 className="mb-2">
      <Link to={createLocalLink(`/blog/${uri}`)}>{title}</Link>
    </h2>
    <div className="meta f-6 color-grey">
      {renderMeta({ author, date, modified })}
      {renderCategories(categories, 'category')}
      {renderCategories(tags, 'tags')}
    </div>
    <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
  </>
)

PostComponent.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  uri: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  modified: PropTypes.string,
  categories: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          name: PropTypes.string,
          uri: PropTypes.string
        })
      })
    )
  }),
  tags: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        uri: PropTypes.string,
        id: PropTypes.string
      })
    )
  })
}

export default PostComponent
