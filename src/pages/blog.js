import React from 'react'
import { graphql } from 'gatsby'
import Pagination from '../components/pagination/pagination'
import Layout from '../components/layout/layout'
import PostCardComponent from '../components/post/post-card'
import SEO from '../components/seo/seo'
import GridComponent from '../components/grid/grid'

const PostsPage = ({ data, pageContext }) => {
  const posts = data?.allMdx?.nodes || []

  return (
    <Layout>
      <SEO title={'Blog Posts | Ian Holden'} pathName="/blog/" />
      <article className="not-full-width block-center px-4 pb-5 pt-6">
        <h1>Blog Posts</h1>
        <p className="reading-content">
          I occasionally like to write about things that I have learnt and
          things that I may want to learn about. While there is no subject
          matter that I will write about exclusively, it is most likely that you
          will find posts about front-end software engineering on this page.
        </p>
        <section className="articles">
          <GridComponent>
            {posts.length
              ? posts.map((post, index) => (
                  <PostCardComponent
                    categories={post.frontmatter.categories}
                    classes="highlight"
                    date={post.frontmatter.date}
                    excerpt={post.frontmatter.excerpt}
                    key={index}
                    modified={post.frontmatter.modified}
                    tags={post.frontmatter.tags}
                    title={post.frontmatter.title}
                    uri={post.slug}
                  />
                ))
              : ''}
          </GridComponent>
          {(!posts || !posts.length) && (
            <>
              <h2>That's odd...</h2>
              <p className="reading-content">
                My blog posts seem to have been misplaced. When I find where
                they have gone, I will bring them back.
              </p>
            </>
          )}
        </section>
        <Pagination
          hasNextPage={pageContext?.hasNextPage ?? true} // @TODO: Defaulting this to true is a little hacky - we should use something more dynamic
          navClasses="mt-6 mb-4"
          nextLabel="Older Posts &rarr;"
          pageNumber={pageContext?.pageNumber || 1}
          pageType="blog"
          prevLabel="&larr; More Recent Posts"
        />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query BlogPageQuery($limit: Int = 10, $skip: Int = 0) {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/blog/.*.(md|mdx)$/" } }
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: [frontmatter___date] }
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

export default PostsPage
