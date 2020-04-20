import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Pagination from '../components/pagination'
import Layout from '../components/layout/layout'
import PostComponent from '../components/post/post'
import SEO from '../components/seo'

const Posts = props => {
  const {
    data: {
      wpgraphql: { posts }
    },
    pageContext: { pageNumber, hasNextPage }
  } = props

  return (
    <Layout>
      <SEO title={'Blog Posts | Ian Holden'} />
      <article className='not-full-width block-center px-4 pb-5 pt-6'>
        <h1>Blog Posts</h1>
        {posts.nodes.map(post => (
          <PostComponent
            key={post.id}
            isPostArchive
            author={post.author}
            date={post.date}
            dateOverride={post.customFields ? post.customFields.publishedDateOverride : null}
            modified={post.modified}
            uri={post.uri}
            excerpt={post.excerpt}
            categories={post.categories}
            tags={post.tags}
            title={post.title}
          />
        ))}
        <hr/>
        <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} />
      </article>
    </Layout>
  )
}

export default Posts

Posts.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      posts: PropTypes.shape({
        nodes: PropTypes.array
      })
    })
  }),
  pageContext: PropTypes.shape({
    pageNumber: PropTypes.number,
    hasNextPage: PropTypes.bool
  })
}

export const pageQuery = graphql`
  query GET_POSTS($ids: [ID]!) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          categories {
            edges {
              node {
                name
                uri
                id
              }
            }
          }
          author {
            firstName
            lastName
          }
          excerpt(format: RENDERED)
          title
          uri
          date
          modified
          id
          tags {
            edges {
              node {
                name
                uri
                id
              }
            }
          }
          customFields {
            publishedDateOverride
          }
        }
      }
      categories {
        nodes {
          uri
          name
          description
          count
        }
      }
      tags {
        nodes {
          uri
          name
          description
          count
        }
      }
    }
  }
`
