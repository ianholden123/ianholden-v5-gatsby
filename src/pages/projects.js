import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ProjectComponent from '../components/project/project'
import SEO from '../components/seo/seo'

const Projects = ({
  data
}) => {
  const projects = data?.allMdx?.nodes || []

  return (
    <Layout>
      <SEO
        title={'Projects | What have I worked on? | Ian Holden'}
        pathName='/projects/'
      />
      <article id='projects' className='pb-5 pt-6'>
        <h1 className='px-4 not-full-width block-center'>Projects</h1>
        <div className='grid not-full-width'>
          {projects.map((project, index) => {
            const {
              archiveImage,
              colourScheme,
              contributors,
              excerpt,
              featuredImage,
              linkToProject,
              state,
              title,
              toolsUsed,
              typeOfProject
            } = project.frontmatter

            return (
              <div className='grid-panel p-4' key={index}>
                <ProjectComponent
                  archiveImage={archiveImage}
                  colours={{
                    primary: colourScheme?.primary,
                    secondary: colourScheme?.secondary,
                    tertiary: colourScheme?.tertiary
                  }}
                  contributors={contributors || null}
                  excerpt={excerpt}
                  featuredImage={featuredImage}
                  isPostArchive
                  link={linkToProject || null}
                  state={state || null}
                  title={title}
                  toolsUsed={toolsUsed || null}
                  type={typeOfProject}
                  uri={project.slug}
                />
              </div>
            )
          })}
        </div>
      </article>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectsPageQuery {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/projects/.*.(md|mdx)$/"}}
      limit: 100
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      nodes {
        frontmatter {
          archiveImage
          colourScheme {
            primary
            secondary
            tertiary
          }
          contributors
          excerpt
          featuredImage
          linkToProject
          portraitImage
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
