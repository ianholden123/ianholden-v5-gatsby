import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PostComponent from '../components/post/post'

const CategoryTemplate = props => {
  const {
    data: {
      wpgraphql: { category }
    }
  } = props
  const { name, posts } = category

  return (
    <Layout>
      <SEO title={`Category - ${name} | Ian Holden`} />
      <article>
        <div className="not-full-width block-center">
          <h1>Category - {name}</h1>
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
        </div>
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
