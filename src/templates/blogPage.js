import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PostComponent from '../components/post/post'

export default function Template({ data }) {
  const {
    mdx: { frontmatter, body, slug },
  } = data
  const { author, categories, date, featuredImage, modified, tags, title } =
    frontmatter

  return (
    <Layout>
      <SEO title={`${title} | Ian Holden`} pathName={slug} />
      <PostComponent
        title={title}
        content={body}
        date={date}
        modified={modified}
        author={author}
        categories={categories}
        tags={tags}
        featuredImage={featuredImage}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        author
        categories
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          alt
          src
        }
        modified
        tags
        title
      }
      slug
    }
  }
`
