import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const CategoryTemplate = props => {
  const {
    data: {
      wpgraphql: { category }
    }
  } = props
  const { name } = category

  return (
    <Layout>
      <SEO title={`Category: ${name} | Ian Holden`} />
      <article>
        <div className="not-full-width block-center">
          <h1>Category: {name}</h1>
        </div>
      </article>
    </Layout>
  )
}

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      category: PropTypes.shape({
        name: PropTypes.string
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
      }
    }
  }
`
