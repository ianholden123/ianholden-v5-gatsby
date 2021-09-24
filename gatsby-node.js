const createPagesForContent = ({ actions, graphql }, pageType) => {
  const { createPage } = actions

  const pageTemplate = require.resolve(`./src/templates/${pageType}Page.js`)

  return graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {fileAbsolutePath: {regex: "/(${pageType})/.*\.mdx$/"}}
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      // const pagePath = `${node.slug}`
      createPage({
        path: node.slug,
        component: pageTemplate,
        context: {
          // additional data can be passed via context
          slug: node.slug,
        },
      })
      console.log(`Page created: ${node.slug}`)
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await createPagesForContent({ actions, graphql }, 'blog')
  await createPagesForContent({ actions, graphql }, 'projects')
}