import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PostComponent from '../components/post/post'

const Post = props => {
  const {
    data: {
      wpgraphql: { post }
    }
  } = props
  const { title, content, date, modified, categories, tags, author } = post

  return (
    <Layout>
      <SEO title={`${title} | Ian Holden`} />
      <article className='not-full-width block-center px-4 py-5'>
        <PostComponent
          title={title}
          content={content}
          date={date}
          modified={modified}
          author={author}
          categories={categories}
          tags={tags}
        />
        <hr/>
      </article>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      post: PropTypes.shape({
        author: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string
        }),
        title: PropTypes.string,
        date: PropTypes.string,
        modified: PropTypes.string,
        categories: PropTypes.shape(),
        tags: PropTypes.shape(),
        content: PropTypes.string
      })
    })
  })
}

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content(format: RENDERED)
        categories {
          edges {
            node {
              name
              uri
              id
            }
          }
        }
        tags {
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
        date
        modified
      }
    }
  }
`
