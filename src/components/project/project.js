import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { createLocalLink } from '../../utils'
import Icon from '../icons'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const renderTools = tools => {
  return (
    <ul className='tools reading-content block-center text-center'>
      { tools.split(',').map((tool, index) => {
        tool = tool.trim()
        if (!tool) return ''
        return (
          <li className='tool inline-block mx-4' key={index}>
            <Icon name={tool} classes='icon-small block-center' />
            {tool}
          </li>
        )
      })}
    </ul>
  )
}

const ProjectComponent = ({
  uri,
  title,
  excerpt,
  content,
  featuredImage,
  contributors,
  link,
  state,
  toolsUsed,
  isPostArchive,
  colours,
  type,
  archiveImage
}) => (
  <>
    { !isPostArchive &&
      <>
        { featuredImage && featuredImage.sourceUrl &&
          <img
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText}
            srcSet={featuredImage.srcSet}
            className='featured-image block-center block'
          />
        }
        <h1 className='mb-2' dangerouslySetInnerHTML={{ __html: title }} />
      </>
    }
    { isPostArchive &&
      <>
        <Link to={createLocalLink(uri, ['projects/'])}>
          <img
            className='px-5'
            src={archiveImage.sourceUrl}
            alt={archiveImage.altText}
          />
        </Link>
        <p className='uppercase f-thin color-dark-grey m-0' dangerouslySetInnerHTML={{ __html: type }} />
        <Link to={createLocalLink(uri, ['projects/'])}>
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
      <div className='content pb-4' dangerouslySetInnerHTML={{ __html: content }} />
    }
  </>
)

ProjectComponent.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  content: PropTypes.string,
  uri: PropTypes.string,
  categories: PropTypes.shape(),
  tags: PropTypes.shape(),
  colours: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
  }),
  toolsUsed: PropTypes.string,
  isPostArchive: PropTypes.bool,
  link: PropTypes.string,
  state: PropTypes.string,
  featuredImage: PropTypes.shape({
    altText: PropTypes.string,
    sourceUrl: PropTypes.string,
    srcSet: PropTypes.string
  }),
  contributors: PropTypes.string,
  archiveImage: PropTypes.shape({
    altText: PropTypes.string,
    sourceUrl: PropTypes.string
  })
}

export default ProjectComponent
