import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const Page = props => {
  const {
    data: {
      wpgraphql: { page }
    }
  } = props
  const { title, content } = page

  return (
    <Layout>
      <SEO title={`${title} | Ian Holden`} />
      <article className='not-full-width block-center px-4 pb-5 pt-6'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </article>
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      page: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string
      })
    })
  })
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
