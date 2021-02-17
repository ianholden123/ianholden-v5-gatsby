import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

import PostComponent from '../post/post'

const BlogPosts = () => {

  const HOME_BLOG_POSTS_QUERY = graphql`
    query GET_BLOG_POSTS_FOR_HOME {
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
            author {
              firstName
              lastName
            }
            excerpt(format: RENDERED)
            title
            uri
            date
            modified
            id
            tags {
              edges {
                node {
                  name
                  uri
                  id
                }
              }
            }
            customFields {
              publishedDateOverride
              hideUpdatedDate
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={HOME_BLOG_POSTS_QUERY}
      render={({
        wpgraphql: {
          posts: { nodes: postItems }
        }
      }) => {
        return (
          <article id='projectsWrapper' className='not-full-width block-center px-4 pt-0 py-6'>
            <h2 className='text-center mt-6'>Blog Posts</h2>
            <div className="articles py-5">
              {postItems.map((post, index) => (
                <PostComponent
                  key={index}
                  isPostArchive
                  author={post.author}
                  date={post.date}
                  dateOverride={post.customFields && post.customFields.publishedDateOverride}
                  hideUpdatedDate={post.customFields && post.customFields.hideUpdatedDate}
                  modified={post.modified}
                  uri={post.uri}
                  excerpt={post.excerpt}
                  categories={post.categories}
                  tags={post.tags}
                  title={post.title}
                  classes="highlight mb-5"
                />
              ))}
            </div>

            <button className='block block-center mb-5 mt-3 uppercase'><Link to='/blog'>View all posts</Link></button>
          </article>
        )
      }}
    />
  )

}

export default BlogPosts
