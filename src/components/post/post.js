import React from 'react'
import classNames from 'classnames'
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
  isPostArchive,
  classes
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

  const articleClasses = classNames(
    'post not-full-width block-center', 
    classes,
    isPostArchive ? 'py-3' : 'px-4 pb-5 pt-6'
  )

  return (
    <article className={articleClasses} itemScope itemType="http://schema.org/Article" >
      { title && !isPostArchive &&
        <h1 className='mb-2' dangerouslySetInnerHTML={{ __html: title }} itemProp="name" />
      }
      { title && isPostArchive &&
        <Link to={`/blog/${createLocalLink(uri)}`}>
          <h2 className="mb-2" dangerouslySetInnerHTML={{ __html: title }} itemProp="name" />
        </Link>
      }
      <MetaComponent
        author={author}
        date={date}
        dateOverride={dateOverride}
        modified={!hideUpdatedDate ? modified : null}
        categories={categories}
        tags={tags}
        isPostArchive={isPostArchive}
      />
      { excerpt &&
        <div className="excerpt pb-4 reading-content" dangerouslySetInnerHTML={{ __html: excerpt }} />
      }
      { content && !isPostArchive &&
        <div className='content pb-4' itemProp="articleBody">{parse(content, { replace: replaceCode })}</div>
      }
    </article>
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
