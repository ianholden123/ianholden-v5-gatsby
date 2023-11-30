import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import ProjectComponent from '../components/project/project'
import SEO from '../components/seo/seo'

const Projects = ({ data }) => {
  const {
    mdx: { frontmatter, body, slug },
  } = data
  const {
    colourScheme,
    contributors,
    excerpt,
    featuredImage,
    linkToProject,
    state,
    title,
    toolsUsed,
    typeOfProject,
  } = frontmatter

  return (
    <Layout>
      <SEO title={`${title} | Projects | Ian Holden`} pathName={slug} />
      <article className="post not-full-width block-center px-4 pb-5 pt-6">
        <ProjectComponent
          title={title}
          content={body}
          excerpt={excerpt}
          featuredImage={featuredImage}
          contributors={contributors || null}
          link={linkToProject || null}
          state={state || null}
          toolsUsed={toolsUsed || null}
          colours={{
            primary: colourScheme?.primary,
            secondary: colourScheme?.secondary,
            tertiary: colourScheme?.tertiary,
          }}
          type={typeOfProject}
        />
        <hr />
      </article>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        colourScheme {
          primary
          secondary
          tertiary
        }
        contributors
        excerpt
        featuredImage {
          alt
          src
        }
        linkToProject
        state
        title
        toolsUsed
        typeOfProject
      }
      slug
    }
  }
`
