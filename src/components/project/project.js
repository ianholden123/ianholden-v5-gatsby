import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import './project.css'
import { createLocalLink } from '../../utils'

const ProjectComponent = ({
  uri,
  title,
  excerpt,
  content,
  isPostArchive
}) => (
  <>
    { title && !isPostArchive &&
      <h1 className='mb-2'>{title}</h1>
    }
    { title && isPostArchive &&
      <h2 className="mb-2">
        <Link to={createLocalLink(`/blog/${uri}`)}>{title}</Link>
      </h2>
    }
    { excerpt &&
      <div className="excerpt pb-4 article-content" dangerouslySetInnerHTML={{ __html: excerpt }} />
    }
    { content && !isPostArchive &&
      <div className='content pb-4' dangerouslySetInnerHTML={{ __html: content }} />
    }
  </>
)

ProjectComponent.propTypes = {
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  uri: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  modified: PropTypes.string,
  categories: PropTypes.shape(),
  tags: PropTypes.shape(),
  content: PropTypes.string,
  isPostArchive: PropTypes.bool
}

export default ProjectComponent
