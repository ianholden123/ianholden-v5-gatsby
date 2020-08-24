import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageNumber, hasNextPage }) => {
  let prevLink = null
  if (pageNumber === 1) {
    prevLink = '/blog/'
  } else if (pageNumber > 1) {
    prevLink = `/blog/page/${pageNumber - 1}`
  }

  let nextLink = null
  if (hasNextPage) {
    nextLink = `/blog/page/${pageNumber + 1}`
  }

  return (
    <nav>
      {prevLink && (
        <button className='mr-4 uppercase'>
          <Link to={prevLink}>&larr; Previous Posts</Link>
        </button>
      )}
      {nextLink && (
        <button className='uppercase'>
          <Link to={nextLink}>Next Posts &rarr;</Link>
        </button>
      )}
    </nav>
  )
}

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  hasNextPage: PropTypes.bool
}

export default Pagination
