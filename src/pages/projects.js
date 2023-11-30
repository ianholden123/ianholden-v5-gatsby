import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ProjectCardComponent from '../components/project/project-card'
import SEO from '../components/seo/seo'
import GridComponent from '../components/grid/grid'

const Projects = ({ data }) => {
  const projects = data?.allMdx?.nodes || []

  return (
    <Layout>
      <SEO
        title={'Projects | What have I worked on? | Ian Holden'}
        pathName="/projects/"
      />
      <article id="projects" className="pb-5 pt-6">
        <h1 className="px-4 not-full-width block-center">Projects</h1>
        <GridComponent className="not-full-width">
          {projects.map((project, index) => {
            const { archiveImage, excerpt, title, typeOfProject } =
              project.frontmatter

            return (
              <div className="grid-panel p-4" key={index}>
                <ProjectCardComponent
                  archiveImage={archiveImage}
                  excerpt={excerpt}
                  title={title}
                  type={typeOfProject}
                  uri={project.slug}
                />
              </div>
            )
          })}
        </GridComponent>
      </article>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectsPageQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/projects/.*.(md|mdx)$/" } }
      limit: 100
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        frontmatter {
          archiveImage {
            alt
            src
          }
          colourScheme {
            primary
            secondary
            tertiary
          }
          contributors
          excerpt
          linkToProject
          portraitImage {
            alt
            src
          }
          state
          title
          toolsUsed
          typeOfProject
        }
        slug
      }
    }
  }
`
