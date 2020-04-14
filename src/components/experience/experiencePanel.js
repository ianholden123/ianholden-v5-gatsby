import React from 'react'
import PropTypes from 'prop-types'

const ExperiencePanelComponent = ({
  isImagePanel,
  imagePanelImage,
  thumbImageSrc,
  thumbImageAlt,
  panelTitle,
  panelParagraph
}) =>
  !isImagePanel ? (
    <div className='grid-panel p-4'>
      <div className='experience-content m-5'>
        <img src={thumbImageSrc} alt={thumbImageAlt} aria-hidden='true' />
        <div className='text'>
          <h3>{panelTitle}</h3>
          <p>{panelParagraph}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className='grid-panel image-panel p-0'
      style={imagePanelImage && { backgroundImage: `url(${imagePanelImage})` }}
    />
  )

ExperiencePanelComponent.propTypes = {
  isImagePanel: PropTypes.bool,
  imagePanelImage: PropTypes.string,
  thumbImageSrc: PropTypes.string,
  thumbImageAlt: PropTypes.string,
  panelTitle: PropTypes.string,
  panelParagraph: PropTypes.string
}

export default ExperiencePanelComponent
