import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import PostComponent from '../components/post/post'
import { DiscussionEmbed } from 'disqus-react'
import config from '../config'

const disqusConfig = (url, slug, title) => ({
  shortname: process.env.GATSBY_DISQUS_NAME,
  config: { url, identifier: slug, title }
})

const Post = props => {
  const {
    data: {
      wpgraphql: { post }
    }
  } = props
  const { title, content, date, modified, categories, tags, author, featuredImage, slug } = post
  const postUrl = `${config.productionSiteUrl}/blog/${slug}`

  return (
    <Layout>
      <SEO
        title={`${title} | Ian Holden`}
        pathName={`/blog/${slug}/`}
      />
      <article className='post not-full-width block-center px-4 pb-5 pt-6'>
        <PostComponent
          title={title}
          content={content}
          date={date}
          dateOverride={post.customFields ? post.customFields.publishedDateOverride : null}
          modified={modified}
          author={author}
          categories={categories}
          tags={tags}
          featuredImage={featuredImage}
        />
        <div className='reading-content block-center'>
          <hr/>
          <DiscussionEmbed {...disqusConfig(postUrl, slug, title)} />
        </div>
        <hr/>
      </article>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      post: PropTypes.shape({
        author: PropTypes.shape({
          firstName: PropTypes.string,
          lastName: PropTypes.string
        }),
        title: PropTypes.string,
        slug: PropTypes.string,
        date: PropTypes.string,
        customFields: PropTypes.shape({
          publishedDateOverride: PropTypes.string
        }),
        modified: PropTypes.string,
        categories: PropTypes.shape(),
        tags: PropTypes.shape(),
        content: PropTypes.string,
        featuredImage: PropTypes.shape({
          altText: PropTypes.string,
          sourceUrl: PropTypes.string,
          srcSet: PropTypes.string
        })
      })
    })
  })
}

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        slug
        content(format: RENDERED)
        categories {
          edges {
            node {
              name
              uri
              id
            }
          }
        }
        tags {
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
        date
        modified
        featuredImage {
          altText
          sourceUrl
          srcSet
        }
        customFields {
          publishedDateOverride
        }
      }
    }
  }
`
