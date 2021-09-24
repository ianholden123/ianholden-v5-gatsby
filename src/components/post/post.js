import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import parse, { domToReact } from 'html-react-parser'
import './post.css'
import { createLocalLink } from '../../utils'
import MetaComponent from './meta'
import CodeBlock from './codeBlock'

const PostComponent = ({
  author,
  categories,
  classes,
  content,
  date,
  excerpt,
  isPostArchive,
  modified,
  tags,
  title,
  uri
}) => {
  const getLanguageFromClass = node => {
    if (node?.attribs?.class) {
      return node.attribs.class.replace('language-', '')
    }
    return null
  }

  const getCode = node => {
    if (node.children.length > 0 && node.children[0].name === 'code') {
      return node.children[0].children
    } else {
      return node.children
    }
  }

  const replaceHtmlNode = node => {
    switch (node.name) {
      case 'pre':
        return node.children.length > 0 && <CodeBlock language={getLanguageFromClass(node.children[0])}>{domToReact(getCode(node))}</CodeBlock>
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
        <h1 className='mb-2' itemProp="name">{title}</h1>
      }
      { title && isPostArchive &&
        <Link to={`/blog/${createLocalLink(uri)}`}>
          <h2 className="mb-2" itemProp="name">{title}</h2>
        </Link>
      }
      <MetaComponent
        author={author}
        categories={categories}
        date={date}
        isPostArchive={isPostArchive}
        modified={modified}
        tags={tags}
      />
      { excerpt &&
        <div className="excerpt reading-content">{excerpt}</div>
      }
      { content && !isPostArchive &&
        // <div className='content pb-4' itemProp="articleBody">{parse(content, { replace: replaceHtmlNode })}</div>
        <div className='content pb-4' itemProp="articleBody"><MDXRenderer>{content}</MDXRenderer></div>
      }
    </article>
  )
}

export default PostComponent
