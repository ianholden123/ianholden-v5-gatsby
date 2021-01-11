import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import parse, { domToReact } from 'html-react-parser'
import './post.css'
import { createLocalLink } from '../../utils'
import MetaComponent from './meta'
import CodeBlock from './codeBlock'

const PostComponent = ({
  author,
  uri,
  title,
  excerpt,
  date,
  dateOverride,
  hideUpdatedDate,
  modified,
  categories,
  tags,
  content,
  isPostArchive
}) => {
  const getNodeClasses = node => {
    return node.attribs.class || null
  }

  const getCode = node => {
    if (node.children.length > 0 && node.children[0].name === 'code') {
      return node.children[0].children
    } else {
      return node.children
    }
  }

  const replaceCode = node => {
    switch (node.name) {
      case 'pre':
        return node.children.length > 0 && <CodeBlock codeBlockClass={getNodeClasses(node)}>{domToReact(getCode(node))}</CodeBlock>
      default:
        return null
    }
  }

  return (
    <>
      { title && !isPostArchive &&
        <h1 className='mb-2' dangerouslySetInnerHTML={{ __html: title }} />
      }
      { title && isPostArchive &&
        <Link to={`/blog/${createLocalLink(uri)}`}>
          <h2 className="mb-2" dangerouslySetInnerHTML={{ __html: title }} />
        </Link>
      }
      <MetaComponent
        author={author}
        date={date}
        dateOverride={dateOverride}
        modified={!hideUpdatedDate && modified}
        categories={categories}
        tags={tags}
        isPostArchive={isPostArchive}
      />
      { excerpt &&
        <div className="excerpt pb-4 reading-content" dangerouslySetInnerHTML={{ __html: excerpt }} />
      }
      { content && !isPostArchive &&
        <div className='content pb-4'>{parse(content, { replace: replaceCode })}</div>
      }
    </>
  )
}

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
  hideUpdatedDate: PropTypes.bool,
  modified: PropTypes.string,
  categories: PropTypes.shape(),
  tags: PropTypes.shape(),
  content: PropTypes.string,
  isPostArchive: PropTypes.bool
}

export default PostComponent
