import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import './projects.css'

import ProjectTile from './projectTile'
import BlankProjectTile from './blankProjectTile'

const ProjectsComponent = props => {
  const [rectangle, setRectangle] = useState(null);

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
              { projectsToDisplay.map((project, index) => (
                <ProjectTile
                  id={project.id}
                  index={index}
                  key={index}
                  logo={project?.customFields?.logo}
                  portraitImage={project?.customFields?.portraitImage}
                  setRectangle={setRectangle}
                  title={project.title}
                  uri={project.uri}
                />
              ))}
              <BlankProjectTile
                uri='/projects'
                text='View All Projects'
                heightPx={rectangle}
              />
            </div>
            <button className='block block-center mb-5 mt-3 uppercase'><Link to='/projects'>View all projects</Link></button>
          </article>
        )
      }}
    />
  )
}

export default ProjectsComponent
