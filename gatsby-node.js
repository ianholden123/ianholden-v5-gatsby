const createPagesForListing = ({ actions, graphql }, pageType) => {
  const { createPage } = actions

  const pageTemplate = require.resolve(`./src/pages/${pageType}.js`)

  return graphql(`
    {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/(${pageType})/.*\.(mdx|md)$/"}}
      ) {
        totalCount
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const totalCount = result?.data?.allMdx?.totalCount
    const numberOfItemsPerPage = 10
    const numberOfPagesToCreate = totalCount
      ? Math.ceil(totalCount / numberOfItemsPerPage)
      : 0

    for (
      let pageNumber = 1;
      pageNumber <= numberOfPagesToCreate;
      pageNumber++
    ) {
      const pagePath = `${pageType}/page/${pageNumber}`
      createPage({
        path: pagePath,
        component: pageTemplate,
        context: {
          limit: numberOfItemsPerPage,
          skip: (pageNumber - 1) * numberOfItemsPerPage,
          pageNumber,
          hasNextPage: pageNumber < numberOfPagesToCreate,
        },
      })
      console.log(`Page created: ${pagePath}`)
    }
  })
}

const createPagesForContent = ({ actions, graphql }, pageType) => {
  const { createPage } = actions

  const pageTemplate = require.resolve(`./src/templates/${pageType}Page.js`)

  return graphql(`
    {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/(${pageType})/.*\.(mdx|md)$/"}}
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: pageTemplate,
        context: {
          slug: node.slug,
        },
      })
      console.log(`Page created: ${node.slug}`)
    })
  })
}

exports.createPages = async ({ actions, graphql }) => {
  await createPagesForListing({ actions, graphql }, 'blog')
  await createPagesForContent({ actions, graphql }, 'blog')
  await createPagesForContent({ actions, graphql }, 'projects')
}
