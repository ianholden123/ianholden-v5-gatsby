import React from 'react'
import { Link } from 'gatsby'
import Button from '../button/button'

const Pagination = ({
  hasNextPage,
  navClasses,
  nextLabel = 'Next',
  pageNumber,
  pageType,
  prevLabel = 'Previous',
}) => {
  let prevLink = null
  if (pageNumber === 2) {
    prevLink = `/${pageType}/page/1`
  } else if (pageNumber > 2) {
    prevLink = `/${pageType}/page/${pageNumber - 1}`
  }

  let nextLink = null
  if (hasNextPage) {
    nextLink = `/${pageType}/page/${pageNumber + 1}`
  }

  return (
    <nav className={navClasses}>
      {prevLink && (
        <Button className="mr-4 uppercase">
          <Link to={prevLink}>{prevLabel}</Link>
        </Button>
      )}
      {nextLink && (
        <Button className="uppercase">
          <Link to={nextLink}>{nextLabel}</Link>
        </Button>
      )}
    </nav>
  )
}

export default Pagination
