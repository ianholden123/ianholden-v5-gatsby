import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './projects.css'

const ProjectsComponent = props => {
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
              logo {
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
            <h2 className='text-center mt-6'>Web Projects</h2>
            <div className='horizontalScroll'>
              { projectsToDisplay.map(project => (
                <div className='hsItem text-center' key={project.id}>
                  <Link to={project.uri}>
                    { project.customFields && project.customFields.portraitImage && project.customFields.portraitImage.sourceUrl &&
                      <>
                        <img src={project.customFields.portraitImage.sourceUrl} alt={project.customFields.portraitImage.altText} />

                        { project.customFields.logo && project.customFields.logo && project.customFields.logo.sourceUrl &&
                          <img className='logo' src={project.customFields.logo.sourceUrl} alt={project.customFields.logo.altText} />
                        }
                      </>
                    }
                    <h3 className='f5 capitalize py-3 px-4' dangerouslySetInnerHTML={{ __html: project.title }} />
                  </Link>
                </div>
              ))}
            </div>
            <button className='block block-center mb-5 mt-3 uppercase'><Link to='/projects'>View all projects</Link></button>
          </article>
        )
      }}
    />
  )
}

export default ProjectsComponent
