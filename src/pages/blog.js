import React from 'react'
import { graphql } from 'gatsby'
// import Pagination from '../components/pagination'
import Layout from '../components/layout/layout'
import PostComponent from '../components/post/post'
import SEO from '../components/seo/seo'

const PostsPage = ({
  data
 }) => {
  const posts = data?.allMarkdownRemark?.nodes || []

  return (
    <Layout>
      <SEO
        title={'Blog Posts | Ian Holden'}
        pathName='/blog/'
      />
      <article className='not-full-width block-center px-4 pb-5 pt-6'>
        <h1>Blog Posts</h1>
        <p className="reading-content">I occasionally like to write about things that I have learnt and things that I may want to learn about. While there is no subject matter that I will write about exclusively, it is most likely that you will find posts about front-end software engineering on this page.</p>
        <section className="articles">
          {posts.length ? 
            posts.map((post, index) => (
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
                uri={post.frontmatter.slug}
              />
            ))
          : (
            <>
              <h2>That's odd...</h2>
              <p>My blog posts seem to have been misplaced. When I find where they have gone, I will bring them back.</p>
            </>
          )}
        </section>
        {/* <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage} /> */}
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/blog/.*.(md|mdx)$/"}}
      limit: 100
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      nodes {
        frontmatter {
          author
          date
          excerpt
          slug
          title
        }
      }
    }
  }
`

export default PostsPage
