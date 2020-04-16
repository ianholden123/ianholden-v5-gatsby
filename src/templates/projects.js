import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout/layout'
import ProjectComponent from '../components/project/project'
import SEO from '../components/seo'
import '../components/project/projects.css'

const Projects = props => {
  const {
    data: {
      wpgraphql: { projects }
    }
  } = props

  return (
    <Layout>
      <SEO title={'Projects | What have I worked on | Ian Holden'} />
      <article id='projects' className='pb-5 pt-6'>
        <h1 className='px-4 not-full-width block-center'>Projects</h1>
        <div className='grid not-full-width'>
          {projects.nodes.map(project => (
            <div className='grid-panel p-4' key={project.id}>
              <ProjectComponent
                isPostArchive
                uri={project.uri}
                excerpt={project.excerpt}
                title={project.title}
                featuredImage={project.featuredImage}
                contributors={project.customFields.contributors || null}
                link={project.customFields.linkToProject || null}
                state={project.customFields.state || null}
                toolsUsed={project.customFields.toolsUsed || null}
                colours={{
                  primary: project.customFields.colourSchemePrimary,
                  secondary: project.customFields.colourSchemeSecondary,
                  tertiary: project.customFields.colourSchemeTertiary
                }}
                projectType={project.customFields.typeOfProject}
                archiveImage={project.customFields.archiveImage}
              />
            </div>
          ))}
        </div>
      </article>
    </Layout>
  )
}

export default Projects

Projects.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      projects: PropTypes.shape({
        nodes: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            excerpt: PropTypes.string,
            title: PropTypes.string,
            uri: PropTypes.string,
            featuredImage: PropTypes.shape({
              altText: PropTypes.string,
              sourceUrl: PropTypes.string
            }),
            customFields: PropTypes.shape({
              state: PropTypes.string,
              contributors: PropTypes.string,
              linkToProject: PropTypes.string,
              toolsUsed: PropTypes.string,
              colourSchemePrimary: PropTypes.string,
              colourSchemeSecondary: PropTypes.string,
              colourSchemeTertiary: PropTypes.string,
              typeOfProject: PropTypes.string,
              archiveImage: PropTypes.shape({
                altText: PropTypes.string,
                sourceUrl: PropTypes.string
              })
            })
          })
        )
      })
    })
  })
}

export const pageQuery = graphql`
  query GET_PROJECTS($ids: [ID]!) {
    wpgraphql {
      projects(where: { in: $ids }) {
        nodes {
          id
          excerpt(format: RENDERED)
          title
          uri
          featuredImage {
            altText
            sourceUrl(size: LARGE)
          }
          customFields {
            contributors
            linkToProject
            state
            toolsUsed
            colourSchemePrimary,
            colourSchemeSecondary,
            colourSchemeTertiary,
            typeOfProject,
            archiveImage {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`
