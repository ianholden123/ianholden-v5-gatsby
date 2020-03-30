import React from 'react'
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
            <article>
                <div className='not-full-width block-center'>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </article>
        </Layout>
    )
}

export default Post

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