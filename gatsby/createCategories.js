const path = require('path')

module.exports = async ({ actions, graphql }) => {
  const GET_CATEGORIES = `
        query GET_CATEGORIES($first:Int) {
            wpgraphql {
                categories(first: $first) {
                    pageInfo {
                        endCursor
                        hasNextPage
                    }
                    nodes {
                        id
                        categoryId
                        slug
                    }
                }
            }
        }
    `

  const { createPage } = actions
  const allTags = []
  const slugPrefix = '/blog/category/'

  const fetchCategories = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          categories: {
            nodes,
            pageInfo: { hasNextPage, endCursor }
          }
        }
      } = data
      nodes.map(category => {
        allTags.push(category)
      })
      if (hasNextPage) {
        return fetchCategories({ first: variables.first, after: endCursor })
      }
      return allTags
    })

  await fetchCategories({ first: 100, after: null }).then(allTags => {
    const categoryTemplate = path.resolve('./src/templates/category.js')
    allTags.map(category => {
      console.log(`Creating category: ${slugPrefix}${category.slug}`)
      createPage({
        path: `${slugPrefix}${category.slug}`,
        component: categoryTemplate,
        context: category
      })
    })
  })
}
