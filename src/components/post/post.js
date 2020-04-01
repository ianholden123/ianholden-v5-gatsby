import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import './post.css'
import { createLocalLink } from '../../utils'

const renderMeta = ({ author, date, modified }) => {
  const fullName = author && `${author.firstName} ${author.lastName}`
  const hasBeenModified = moment(date).diff(moment(modified)) < -24 // Only deem as modified if modification has happened more than 24 hours of publish date

  if (author || date || modified) {
    return (
      <ul className='meta'>
        {fullName && <li>Written by {fullName}</li>}
        {!hasBeenModified && date && (
          <li>Published {moment(date).format('MMMM Do YYYY')}</li>
        )}
        {hasBeenModified && modified && (
          <li>Updated {moment(modified).format('MMMM Do YYYY')}</li>
        )}
      </ul>
    )
  }
  return ''
}

const renderCategories = (categories, type = 'category') => {
  if (!categories || categories.length === 0) return ''
  return (
    <ul className={type}>
      {categories.nodes.map(({ name, uri, id }) => (
        <li key={id}>
          <Link to={`/blog/${createLocalLink(uri)}`}>{name}</Link>
        </li>
      ))}
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
    <h2>
      <Link to={createLocalLink(`/blog/${uri}`)}>{title}</Link>
    </h2>
    <div className='meta'>
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
