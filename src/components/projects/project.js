import React from 'react'
import PropTypes from 'prop-types'
import { createRelativeLink } from '../../utils'

const ProjectComponent = ({ projectName, projectLink, imageAlt, imageSrc }) => (
  <div className='hsItem text-center'>
    <a href={projectLink} rel='noreferrer noopener'>
      <img src={createRelativeLink(imageSrc)} alt={imageAlt} />
      <h3 className='f5 capitalize px-4'>{projectName}</h3>
    </a>
  </div>
)

ProjectComponent.defaultProps = {
  projectLink: '#'
}

ProjectComponent.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
}

export default ProjectComponent
