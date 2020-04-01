import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import moment from 'moment'
import './post.css'
import { createLocalLink } from '../../utils'

const renderMeta = ({ author, date, modified }) => {
  const fullName = author && `${author.firstName} ${author.lastName}`

  if (author || date || modified) {
    return (
      <ul className='meta'>
        {fullName && <li>Written by {fullName}</li>}
        {date && <li>Published {moment(date).format('MMMM Do YYYY')}</li>}
        {modified && <li>Updated {moment(modified).format('MMMM Do YYYY')}</li>}
      </ul>
    )
  }
  return ''
}

const PostComponent = ({ author, uri, title, excerpt, date, modified }) => (
  <>
    <h2>
      <Link to={createLocalLink(`/blog/${uri}`)}>{title}</Link>
    </h2>
    {renderMeta({ author, date, modified })}
    <div className='excerpt' dangerouslySetInnerHTML={{ __html: excerpt }} />
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
  modified: PropTypes.string
}

export default PostComponent
