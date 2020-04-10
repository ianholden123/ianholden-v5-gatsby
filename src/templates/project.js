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
  const { title, content } = project

  return (
    <Layout>
      <SEO title={`${title} | Projects | Ian Holden`} />
      <article className='not-full-width block-center px-4 pb-5 pt-6'>
        <ProjectComponent
          title={title}
          content={content}
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
        title: PropTypes.string,
        content: PropTypes.string
      })
    })
  })
}

export const pageQuery = graphql`
  query GET_PROJECT($id: ID!) {
    wpgraphql {
      project(id: $id) {
        title
        content(format: RENDERED)
      }
    }
  }
`
