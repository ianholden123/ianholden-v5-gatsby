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
      <SEO title={'Projects | Ian Holden'} />
      <article id='projects' className='px-4 pb-5 pt-6'>
        <h1 className='not-full-width block-center text-center'>Projects</h1>
        <div className='grid'>
          {projects.nodes.map(project => (
            <div className='grid-panel' key={project.id}>
              <ProjectComponent
                isPostArchive
                uri={project.uri}
                excerpt={project.excerpt}
                title={project.title}
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
        nodes: PropTypes.array
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
        }
      }
    }
  }
`
