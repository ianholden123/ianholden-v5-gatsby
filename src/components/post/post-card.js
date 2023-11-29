import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import MetaComponent from './meta'

const PostCardComponent = ({
  categories,
  classes,
  date,
  excerpt,
  modified,
  tags,
  title,
  uri
}) => {
  const articleClasses = classNames(
    'post not-full-width block-center py-3', 
    classes
  )

  const components = {
    Link
  }

  return (
    <div itemScope itemType="http://schema.org/Article">
      <MDXProvider components={components}>
        <article className={articleClasses} >
          { title &&
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
        </article>
      </MDXProvider>
    </div>
  )
}

export default PostCardComponent
