const path = require(`path`)

// Create blog posts dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    query {
      allPrismicBlogPost {
        edges {
          node {
            data {
              author
              content {
                html
              }
              date_created
              date_updated
              featured_image {
                alt
                copyright
                url
              }
              excerpt {
                html
                text
              }
              title {
                html
                text
              }
            }
            slugs
          }
        }
      }
    }
  `)

  const allPosts = result.data.allPrismicBlogPost.edges
  allPosts.forEach(({node: post}) => {
    createPage({
      path: post.slugs[0],
      component: blogPostTemplate,
      context: {
        author: post.data.author,
        content: post.data.content,
        date_created: post.data.date_created,
        date_updated: post.data.date_updated,
        excerpt: post.data.excerpt,
        featured_image: post.data.featured_image,
        title: post.data.title,
        slug: post.slugs[0]
      },
    })
  })
}
