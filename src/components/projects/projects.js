import React, { useState } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import StyledProjects from './styledProjects'

import ProjectTile from './projectTile'
import BlankProjectTile from './blankProjectTile'
import Button from '../button/button'
import HorizontalScroll from '../horizontalScroll/horizontalScroll'

const ProjectsComponent = props => {
  const [rectangle, setRectangle] = useState(null);

  const HOME_PROJECTS_QUERY = graphql`
    query GET_PROJECTS_FOR_HOME {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/projects/.*.(md|mdx)$/"}}
        sort: {order: DESC, fields: [frontmatter___date]}
      ) {
        nodes {
          frontmatter {
            logo {
              alt
              src
            }
            portraitImage {
              alt
              src
            }
            showOnHomepage
            title
          }
          slug
        }
      }
    }
  `

  return (
    <StaticQuery
      query={HOME_PROJECTS_QUERY}
      render={
        ({ allMdx: { nodes: projects = [] } }) => {
          const projectsToDisplay = projects.filter(project => project.frontmatter.showOnHomepage)
          
          return (
            <StyledProjects className='px-0 m-0 py-5'>
              <h2 className='text-center mt-6'>Web Projects</h2>
              <HorizontalScroll>
                { projectsToDisplay.map((project, index) => (
                  <ProjectTile
                    id={project.frontmatter.id}
                    index={index}
                    key={index}
                    logo={project.frontmatter.logo}
                    portraitImage={project.frontmatter.portraitImage}
                    setRectangle={setRectangle}
                    title={project.frontmatter.title}
                    uri={project.slug}
                  />
                ))}
                <BlankProjectTile
                  uri='/projects'
                  text='View All Projects'
                  heightPx={rectangle}
                />
              </HorizontalScroll>
              <Button className='block block-center mb-5 mt-3 uppercase'>
                <Link to='/projects'>View all projects</Link>
              </Button>
            </StyledProjects>
          )
        }
      }
    />
  )
}

export default ProjectsComponent
