import React from "react"
import PropTypes from "prop-types"

const ProjectComponent = ({
  projectName,
  projectLink,
  imageAlt,
  imageSrc
}) => (
    <div class="hsItem">
      <a href={projectLink} rel="noreferrer noopener">
        <img src={imageSrc} alt={imageAlt} />
        <h3>{projectName}</h3>
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
  imageSrc: PropTypes.string.isRequired,
}

export default ProjectComponent
