import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const Post = props => {
  const {
    data: {
      wpgraphql: { post }
    }
  } = props
  const { title, content } = post

  return (
    <Layout>
      <SEO title={`${title} | Ian Holden`} />
      <article className='not-full-width block-center px-4 py-5'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      post: PropTypes.shape({
        title: PropTypes.string,
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
        content
        uri
      }
    }
  }
`
