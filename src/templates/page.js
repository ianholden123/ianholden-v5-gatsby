import React from 'react'
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
            <article>
                <div className='not-full-width block-center'>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </article>
        </Layout>
    )
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