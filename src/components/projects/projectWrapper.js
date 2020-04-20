import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProjectComponent from './project'

const ProjectWrapperComponent = props => {
  const HOME_PROJECTS_QUERY = graphql`
    query GET_PROJECTS_FOR_HOME {
      wpgraphql {
        projects {
          nodes {
            id
            title
            uri
            customFields {
              showOnHomepage
              portraitImage {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={HOME_PROJECTS_QUERY}
      render={({
        wpgraphql: {
          projects: { nodes: projectItems }
        }
      }) => {
        const projectsToDisplay = projectItems.filter(project => project.customFields.showOnHomepage)

        return projectsToDisplay && (
          <article id='projectsWrapper' className='px-0 m-0 py-5'>
            <h2 className='text-center uppercase'>Web Projects</h2>
            <div className='horizontalScroll'>
              { projectsToDisplay.map(project => (
                <ProjectComponent
                  key={project.id}
                  projectLink={project.uri}
                  projectName={project.title}
                  image={project.customFields.portraitImage}
                />
              ))}
            </div>
          </article>
        )
      }}
    />
  )
}

export default ProjectWrapperComponent
