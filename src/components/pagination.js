import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ pageNumber, hasNextPage }) => {
  let prevLink = null
  if (pageNumber === 1) {
    prevLink = './blog/'
  } else if (pageNumber > 1) {
    prevLink = `/blog/page/${pageNumber - 1}`
  }

  let nextLink = null
  if (hasNextPage) {
    nextLink = `/blog/page/${pageNumber + 1}`
  }

  return (
    <nav>
      <ul>
        {prevLink && (
          <li>
            <Link to={prevLink}>Previous Posts</Link>
          </li>
        )}
        {nextLink && (
          <li>
            <Link to={nextLink}>Next Posts</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  hasNextPage: PropTypes.bool
}

export default Pagination
