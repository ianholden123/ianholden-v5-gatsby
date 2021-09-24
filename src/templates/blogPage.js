import React from "react"
import { graphql } from "gatsby"
// import { DiscussionEmbed } from 'disqus-react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PostComponent from '../components/post/post'

// const disqusConfig = (url, slug, title) => ({
//   shortname: process.env.GATSBY_DISQUS_NAME,
//   config: { url, identifier: slug, title }
// })

export default function Template({
  data
}) {
  const { mdx: { frontmatter, body } } = data
  const {
    author,
    categories,
    date,
    featuredImage,
    modified,
    slug,
    tags,
    title
  } = frontmatter

  return (
    <Layout>
      <SEO
        title={`${title} | Ian Holden`}
        pathName={`/blog/${slug}/`}
      />
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
      {/* <div className='reading-content block-center px-4'>
        <hr/>
        <DiscussionEmbed {...disqusConfig(postUrl, slug, title)} />
      </div> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        author
        categories
        date(formatString: "MMMM DD, YYYY")
        featuredImage
        modified
        slug
        tags
        title
      }
    }
  }
`