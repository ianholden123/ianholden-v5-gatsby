import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PostComponent from '../components/post/post'

const TagTemplate = props => {
  const {
    data: {
      wpgraphql: { tag }
    }
  } = props
  const { name, posts } = tag

  return (
    <Layout>
      <SEO title={`Tag - ${name} | Ian Holden`} />
      <article>
        <div className="not-full-width block-center">
          <h1>Tag - {name}</h1>
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

TagTemplate.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      tag: PropTypes.shape({
        name: PropTypes.string,
        posts: PropTypes.shape({
          nodes: PropTypes.array
        })
      })
    })
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
          }
        }
      }
    }
  }
`
