import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PostComponent from '../components/post/post'
import Pagination from '../components/pagination'

const CategoryTemplate = props => {
  const {
    data: {
      wpgraphql: { category }
    },
    pageContext: { pageNumber, hasNextPage }
  } = props
  const { name, posts } = category

  return (
    <Layout>
      <SEO title={`Posts in category '${name}' | Ian Holden`} />
      <article className='not-full-width block-center px-4 py-5'>
        <h1>{`Posts in category '${name}'`}</h1>
        {posts.nodes.map(post => (
          <PostComponent
            key={post.postId}
            author={post.author}
            date={post.date}
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

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      category: PropTypes.shape({
        name: PropTypes.string,
        posts: PropTypes.shape({
          nodes: PropTypes.array
        })
      })
    })
  }),
  pageContext: PropTypes.shape({
    pageNumber: PropTypes.number,
    hasNextPage: PropTypes.bool
  })
}

export default CategoryTemplate

export const pageQuery = graphql`
  query GET_Category($id: ID!) {
    wpgraphql {
      category(id: $id) {
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
          }
        }
      }
    }
  }
`
