const path = require('path')

module.exports = async ({ actions, graphql }) => {
  const GET_PROJECTS = `
    query GET_PROJECTS($first:Int $after:String) {
      wpgraphql {
        projects(
          first: $first
          after: $after
        ) {
          pageInfo {
            endCursor
            hasNextPage
          }
          nodes {
            id
            uri
            projectId
            title
          }
        }
      }
    }
  `

  const { createPage } = actions
  const allProjects = []
  const projectPages = []
  let pageNumber = 0

  const fetchProjects = async variables =>
    await graphql(GET_PROJECTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          projects: {
            nodes,
            pageInfo: { hasNextPage, endCursor }
          }
        }
      } = data

      const nodeIds = nodes.map(node => node.projectId)
      const projectsTemplate = path.resolve('./src/templates/projects.js')
      const projectsPath = !variables.after ? '/projects/' : `/projects/page/${pageNumber}`

      projectPages[pageNumber] = {
        path: projectsPath,
        component: projectsTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage
        },
        ids: nodeIds
      }

      nodes.map(post => {
        allProjects.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchProjects({ first: 12, after: endCursor })
      }
      return allProjects
    })

  await fetchProjects({ first: 12, after: null }).then(allProjects => {
    const pageTemplate = path.resolve('./src/templates/project.js')

    projectPages.map(page => {
      console.log(`Create project archive ${page.path}`)
      createPage(page)
    })

    allProjects.map(project => {
      console.log(`Creating project page: ${project.uri}`)
      createPage({
        path: `/${project.uri}`,
        component: pageTemplate,
        context: project
      })
    })
  })
}
