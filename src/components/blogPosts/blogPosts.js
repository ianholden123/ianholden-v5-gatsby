import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import GridComponent from '../grid/grid'
import Button from '../button/button'


import PostComponent from '../post/post'

const BlogPosts = () => {

  const HOME_BLOG_POSTS_QUERY = graphql`
    query GET_BLOG_POSTS_FOR_HOME {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/blog/.*.(md|mdx)$/"}}
        limit: 2
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
        nodes {
          frontmatter {
            author
            date
            excerpt
            title
          }
          slug
        }
      }
    }
  `

  return (
    <StaticQuery
      query={HOME_BLOG_POSTS_QUERY}
      render={({
        allMdx: { nodes: postItems }
      }) => {
        return (
          <article id='projectsWrapper' className='not-full-width block-center px-4 pt-0 py-6'>
            <h2 className='text-center mt-6'>Blog Posts</h2>
            <GridComponent className="py-5">
              {postItems.map((post, index) => (
                <PostComponent
                  author={post.frontmatter.author}
                  categories={post.frontmatter.categories}
                  classes="highlight"
                  date={post.frontmatter.date}
                  excerpt={post.frontmatter.excerpt}
                  isPostArchive
                  key={index}
                  modified={post.frontmatter.modified}
                  tags={post.frontmatter.tags}
                  title={post.frontmatter.title}
                  uri={post.slug}
                />
              ))}
            </GridComponent>

            <Button className='block block-center mb-5 mt-3 uppercase'><Link to='/blog'>View all posts</Link></Button>
          </article>
        )
      }}
    />
  )

}

export default BlogPosts
