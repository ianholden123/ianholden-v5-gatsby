import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import MetaComponent from '../post/meta'
import { createLocalLink } from '../../utils'
import './latestPosts.css'

const LatestPostsComponent = props => {
  const HOME_POSTS_QUERY = graphql`
    query GET_POSTS_FOR_HOME {
      wpgraphql {
        posts(first:2) {
          nodes {
            categories {
              edges {
                node {
                  name
                  uri
                  id
                }
              }
            }
            excerpt(format: RENDERED)
            title
            uri
            date
            modified
            id
            customFields {
              publishedDateOverride
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={HOME_POSTS_QUERY}
      render={({
        wpgraphql: {
          posts: { nodes: postItems }
        }
      }) => {
        return postItems && (
          <article id='postsWrapper' className='m-0 py-5'>
            <h2 className='text-center mt-6'>Latest Posts</h2>
            <div className='grid not-full-width block-center'>
              { postItems.map(post => (
                <div className='grid-item mb-4 px-4' key={post.id}>
                  <Link to={createLocalLink(`/blog/${post.uri}`)}>
                    <h3 className='f5 capitalize pt-3 mb-2' dangerouslySetInnerHTML={{ __html: post.title }} />
                  </Link>
                  <MetaComponent
                    date={post.date}
                    dateOverride={post.customFields ? post.customFields.publishedDateOverride : null}
                    modified={post.modified}
                    categories={post.categories}
                  />
                  <p dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                </div>
              ))}
            </div>
            <button className='block block-center mb-5 mt-3 uppercase'><Link to='/blog'>View all Posts</Link></button>
          </article>
        )
      }}
    />
  )
}

export default LatestPostsComponent
