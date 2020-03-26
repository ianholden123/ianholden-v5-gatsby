import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
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
            <h1>Category: {name}</h1>
        </Layout>
    )
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