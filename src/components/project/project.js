import React from 'react'
import { Link } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import StyledProject from './styledProject'
import Icon from '../icons'

const renderTools = tools => {
  return (
    <ul className='tools reading-content block-center text-center'>
      { tools.map((tool, index) => (
        <li className='tool inline-block mx-4' key={index}>
          <Icon name={tool} classes='icon-small block-center' />
          {tool}
        </li>
      ))}
    </ul>
  )
}

const components = {
  Link
}

const ProjectComponent = ({
  archiveImage,
  colours,
  content,
  contributors,
  excerpt,
  featuredImage,
  isPostArchive,
  link,
  state,
  title,
  toolsUsed,
  type,
  uri,
}) => (
  <StyledProject>
    <MDXProvider components={components}>
      { !isPostArchive &&
        <>
          { featuredImage && featuredImage.src &&
            <img
              src={featuredImage.src}
              alt={featuredImage.alt}
              className='featured-image block-center block'
            />
          }
          <h1 className='mb-2' dangerouslySetInnerHTML={{ __html: title }} />
        </>
      }
      { isPostArchive &&
        <>
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
        </>
      }
      { !isPostArchive &&
        <ul className='meta ml-0'>
          { state && <li className='inline-block mr-4'><strong>Status:</strong> {state}</li> }
          { link &&
            <li className='inline-block mr-4'>
              <strong>Link: </strong>
              <OutboundLink href={link} target='_blank' rel='noreferrer noopener' dangerouslySetInnerHTML={{ __html: title }} />
              <Icon name='externallink' classes='icon-tiny inline-block ml-2' />
            </li>
          }
          { contributors && <li className='inline-block'><strong>Collaborators:</strong> {contributors}</li> }
        </ul>
      }
      { excerpt &&
        <div className="excerpt pb-4 reading-content block-center" dangerouslySetInnerHTML={{ __html: excerpt }} />
      }
      { !isPostArchive && toolsUsed &&
        renderTools(toolsUsed)
      }
      { !isPostArchive && colours &&
        <ul className='colours reading-content block-center text-center'>
          { colours.primary && <li className='inline-block mx-4'><div className='colour block-center' style={{ backgroundColor: colours.primary }} />{colours.primary}</li> }
          { colours.secondary && <li className='inline-block mx-4'><div className='colour block-center' style={{ backgroundColor: colours.secondary }} />{colours.secondary}</li> }
          { colours.tertiary && <li className='inline-block mx-4'><div className='colour block-center' style={{ backgroundColor: colours.tertiary }} />{colours.tertiary}</li> }
        </ul>
      }
      { !isPostArchive && content &&
        <div className='content pb-4'>
          <MDXRenderer>{content}</MDXRenderer>
        </div>
      }
    </MDXProvider>
  </StyledProject>
)

export default ProjectComponent
