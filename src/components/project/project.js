import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { createLocalLink } from '../../utils'
import Icon from '../icons'

const renderTools = tools => {
  return (
    <ul className='tools reading-content block-center text-center'>
      { tools.split(',').map((tool, index) => (
        <li className='tool inline-block mx-4' key={index}>
          <Icon name={tool.trim()} classes='icon-small block-center' />
          {tool}
        </li>
      ))}
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
  projectType
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
        <h1 className='mb-2'>{title}</h1>
      </>
    }
    { isPostArchive &&
      <>
        <p className='uppercase f-thin color-dark-grey m-0'>{projectType}</p>
        <h2 className="mb-2">
          <Link to={createLocalLink(uri)}>{title}</Link>
        </h2>
      </>
    }
    { !isPostArchive &&
      <ul className='meta ml-0'>
        { state && <li className='inline-block mr-4'><strong>Status:</strong> {state}</li> }
        { link &&
          <li className='inline-block'>
            <strong>Link:</strong> <a href={link} target='_blank' rel='noreferrer noopener'>{title} <Icon name='externallink' classes='icon-tiny inline-block' /></a>
          </li>
        }
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
  projectType: PropTypes.string.isRequired,
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
  contributors: PropTypes.string
}

export default ProjectComponent
