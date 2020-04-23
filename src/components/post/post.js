import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './post.css'
import { createLocalLink } from '../../utils'
import MetaComponent from './meta'

const PostComponent = ({
  author,
  uri,
  title,
  excerpt,
  date,
  dateOverride,
  modified,
  categories,
  tags,
  content,
  isPostArchive
}) => (
  <>
    { title && !isPostArchive &&
      <h1 className='mb-2' dangerouslySetInnerHTML={{ __html: title }} />
    }
    { title && isPostArchive &&
      <Link to={createLocalLink(`/blog/${uri}`)}>
        <h2 className="mb-2" dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
    }
    <MetaComponent
      author={author}
      date={date}
      dateOverride={dateOverride}
      modified={modified}
      categories={categories}
      tags={tags}
      isPostArchive={isPostArchive}
    />
    { excerpt &&
      <div className="excerpt pb-4 reading-content" dangerouslySetInnerHTML={{ __html: excerpt }} />
    }
    { content && !isPostArchive &&
      <div className='content pb-4' dangerouslySetInnerHTML={{ __html: content }} />
    }
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
  dateOverride: PropTypes.string,
  modified: PropTypes.string,
  categories: PropTypes.shape(),
  tags: PropTypes.shape(),
  content: PropTypes.string,
  isPostArchive: PropTypes.bool
}

export default PostComponent
