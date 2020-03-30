import React from 'react'
import { graphql, Link } from 'gatsby'
import Pagination from '../components/pagination'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { createLocalLink } from '../utils'

const Posts = props => {
    const {
        data: {
            wpgraphql: { posts }
        },
        pageContext: { pageNumber, hasNextPage}
    } = props

    const currentPage = pageNumber ? `- Page ${pageNumber}` : ``
    return (
        <Layout>
            <SEO title={`Blog Posts | Ian Holden`} />
            <article>
                <div className='not-full-width block-center'>
                    <h1>Blog Posts</h1>
                    {posts.nodes.map(post => (
                        <>
                            <h2 key={post.id}>
                                <Link to={createLocalLink(`/blog/${post.uri}`)}>{post.title}</Link>
                            </h2>
                            <ul className='meta'>
                                <li>Author</li>
                                <li>Published</li>
                                <li>Updated</li>
                            </ul>
                            <div className="excerpt" dangerouslySetInnerHTML={{__html: post.excerpt}} />
                        </>
                    ))}
                    <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} />
                </div>
            </article>
        </Layout>
    )
}

export default Posts

export const pageQuery = graphql`
    query GET_POSTS($ids: [ID]!) {
        wpgraphql {
            posts(where: { in: $ids }) {
                nodes {
                    categories {
                        edges {
                            node {
                                name
                                uri
                            }
                        }
                    }
                    author {
                        firstName
                        id
                        lastName
                        slug
                        uri
                    }
                    excerpt(format: RENDERED)
                    featuredImage {
                        altText
                        title(format: RENDERED)
                        uri
                    }
                    title
                    uri
                }
            }
            categories {
                nodes {
                    uri
                    name
                    description
                    count
                }
            }
            tags {
                nodes {
                    uri
                    name
                    description
                }
            }
        }
    }
`