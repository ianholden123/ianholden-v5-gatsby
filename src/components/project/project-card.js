import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import StyledProject from './styledProject'

const components = {
  Link
}

const ProjectCardComponent = ({
  archiveImage,
  excerpt,
  title,
  type,
  uri,
}) => (
  <StyledProject>
    <MDXProvider components={components}>
      <Link to={`/${uri}/`}>
        <img
          className='px-5'
          src={archiveImage.src}
          alt={archiveImage.alt}
        />
      </Link>
      <p className='uppercase f-thin color-dark-grey m-0' dangerouslySetInnerHTML={{ __html: type }} />
      <Link to={`/${uri}/`}>
        <h2 className="mb-2" dangerouslySetInnerHTML={{ __html: title }} />
      </Link>
      { excerpt &&
        <div className="excerpt pb-4 reading-content block-center" dangerouslySetInnerHTML={{ __html: excerpt }} />
      }
    </MDXProvider>
  </StyledProject>
)

export default ProjectCardComponent
