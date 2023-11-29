import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import MetaComponent from './meta'
import CodeBlock from './codeBlock'
import ContactWrapperComponent from '../contact/contact'

const PostComponent = ({
  author,
  categories,
  classes,
  content,
  date,
  excerpt,
  isPostArchive, // @TODO: Need to refactor into two components instead of using conditional logic.
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
    <div itemScope itemType="http://schema.org/Article">
      <MDXProvider components={components}>
        <article className={articleClasses} >
          { title && !isPostArchive &&
            <h1 className='mb-2' itemProp="name">{title}</h1>
          }
          { title && isPostArchive &&
            <Link to={`/${uri}`}>
              <h2 className="mb-2" itemProp="name">{title}</h2>
            </Link>
          }
          <MetaComponent
            categories={categories}
            date={date}
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
      { author && !isPostArchive && (
        <div className='py-6 px-4 text-center bg-light-grey' itemProp="author" itemScope itemType="http://schema.org/Person">
          <div className="mb-4 f-4 f-thin">
            This post was written by <Link to='/'><span className='bold' itemProp="name">{author}</span></Link>
          </div>
          <StaticImage
            alt='Ian Holden'
            height={200}
            placeholder="blurred"
            src='../../images/ianHeadshot.jpg'
            width={200}
            loading='lazy'
            className='border-radius-100'
          />
          <p className='my-4 reading-content block-center'>
            I am a full stack web developer with a passion for creating beautiful, responsive and accessible websites and applications.
          </p>
        </div>
      )}
      {!isPostArchive && (<ContactWrapperComponent />)}
    </div>
  )
}

export default PostComponent
