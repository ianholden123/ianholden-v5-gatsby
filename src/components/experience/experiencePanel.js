import React from 'react'
import PropTypes from 'prop-types'

const ExperiencePanelComponent = ({
  isImagePanel,
  thumbImageSrc,
  thumbImageAlt,
  panelTitle,
  panelParagraph
}) =>
  !isImagePanel ? (
    <div className='grid-panel'>
      <div className='experience-content'>
        <img src={thumbImageSrc} alt={thumbImageAlt} aria-hidden='true' />
        <div className='text'>
          <h3>{panelTitle}</h3>
          <p>{panelParagraph}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className='grid-panel image-tile'></div>
  )

ExperiencePanelComponent.propTypes = {
  isImagePanel: PropTypes.boolean,
  thumbImageSrc: PropTypes.string,
  thumbImageAlt: PropTypes.string,
  panelTitle: PropTypes.string,
  panelParagraph: PropTypes.string
}

export default ExperiencePanelComponent
