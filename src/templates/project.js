import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ProjectComponent from '../components/project/project'

const Project = props => {
  const {
    data: {
      wpgraphql: { project }
    }
  } = props

  return (
    <Layout>
      <SEO title={`${project.title} | Projects | Ian Holden`} />
      <article className='post not-full-width block-center px-4 pb-5 pt-6'>
        <ProjectComponent
          title={project.title}
          content={project.content}
          excerpt={project.excerpt}
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
          type={project.customFields.typeOfProject}
        />
        <hr/>
      </article>
    </Layout>
  )
}

export default Project

Project.propTypes = {
  data: PropTypes.shape({
    wpgraphql: PropTypes.shape({
      project: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        excerpt: PropTypes.string,
        content: PropTypes.string,
        featuredImage: PropTypes.shape({
          altText: PropTypes.string,
          srcSet: PropTypes.string,
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
          typeOfProject: PropTypes.string
        })
      })
    })
  })
}

export const pageQuery = graphql`
  query GET_PROJECT($id: ID!) {
    wpgraphql {
      project(id: $id) {
        id
        title
        excerpt(format: RENDERED)
        content(format: RENDERED)
        featuredImage {
          altText
          srcSet
          sourceUrl
        }
        customFields {
          contributors
          linkToProject
          state
          toolsUsed
          colourSchemePrimary,
          colourSchemeSecondary,
          colourSchemeTertiary
          typeOfProject
        }
      }
    }
  }
`
