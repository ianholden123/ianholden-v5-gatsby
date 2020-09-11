import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PostComponent from '../components/post/post'
import Pagination from '../components/pagination'

const TagTemplate = props => {
  const {
    data: {
      wpgraphql: { tag }
    },
    pageContext: { pageNumber, hasNextPage }
  } = props
  const { name, posts, slug } = tag

  return (
    <Layout>
      <SEO
        title={`Posts tagged '${name}' | Ian Holden`}
        pathName={`/blog/tag/${slug}/`}
      />
      <article className='not-full-width block-center px-4 pb-5 pt-6'>
        <h1 dangerouslySetInnerHTML={{ __html: `Posts tagged '${name}'` }} />
        {posts.nodes.map(post => (
          <PostComponent
            key={post.postId}
            author={post.author}
            date={post.date}
            modified={post.modified}
            dateOverride={post.customFields ? post.customFields.publishedDateOverride : null}
            uri={post.uri}
            excerpt={post.excerpt}
            categories={post.categories}
            tags={post.tags}
            title={post.title}
            isPostArchive
          />
        ))}
        <hr/>
        <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} />
      </article>
    </Layout>
  )
}

TagTemplate.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      tag: PropTypes.shape({
        name: PropTypes.string,
        posts: PropTypes.shape({
          nodes: PropTypes.array
        }),
        slug: PropTypes.string
      })
    })
  }),
  pageContext: PropTypes.shape({
    pageNumber: PropTypes.number,
    hasNextPage: PropTypes.bool
  })
}

export default TagTemplate

export const pageQuery = graphql`
  query GET_TAG($id: ID!) {
    wpgraphql {
      tag(id: $id) {
        id
        name
        slug
        posts {
          nodes {
            author {
              firstName
              lastName
            }
            content(format: RENDERED)
            postId
            date
            modified
            uri
            title(format: RENDERED)
            excerpt(format: RENDERED)
            categories {
              nodes {
                name
                uri
                id
              }
            }
            tags {
              nodes {
                name
                uri
                id
              }
            }
            customFields {
              publishedDateOverride
            }
          }
        }
      }
    }
  }
`
