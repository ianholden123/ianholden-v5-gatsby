const createPagesForContent = ({ actions, graphql }, pageType) => {
  const { createPage } = actions

  const pageTemplate = require.resolve(`./src/templates/${pageType}Page.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/(${pageType})/.*\.md$/"}}
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const pagePath = `/${pageType}/${node.frontmatter.slug}`
      createPage({
        path: pagePath,
        component: pageTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
      console.log(`Page created: ${pagePath}`)
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await createPagesForContent({ actions, graphql }, 'blog')
  await createPagesForContent({ actions, graphql }, 'projects')
}