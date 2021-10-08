import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import './post.css'
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
  const articleClasses = classNames(
    'post not-full-width block-center', 
    classes,
    isPostArchive ? 'py-3' : 'px-4 pb-5 pt-6'
  )

  const components = {
    pre: CodeBlock,
    Link
  }

  return (
    <MDXProvider components={components}>
      <article className={articleClasses} itemScope itemType="http://schema.org/Article" >
        { title && !isPostArchive &&
          <h1 className='mb-2' itemProp="name">{title}</h1>
        }
        { title && isPostArchive &&
          <Link to={`/${uri}`}>
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
          <div className='content pb-4' itemProp="articleBody"><MDXRenderer>{content}</MDXRenderer></div>
        }
      </article>
    </MDXProvider>
  )
}

export default PostComponent
