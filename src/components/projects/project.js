import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const ProjectComponent = ({ projectName, projectLink, image }) => (
  <div className='hsItem text-center'>
    <Link to={projectLink}>
      { image && image.sourceUrl && <img src={image.sourceUrl} alt={image.altText} />}
      <h3 className='f5 capitalize px-4'>{projectName}</h3>
    </Link>
  </div>
)

ProjectComponent.defaultProps = {
  projectLink: '#'
}

ProjectComponent.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  image: PropTypes.shape({
    altText: PropTypes.string,
    sourceUrl: PropTypes.string
  })
}

export default ProjectComponent
