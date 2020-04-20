import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../icons'

const ExperiencePanelComponent = ({
  isImagePanel,
  imagePanelImage,
  iconName,
  panelTitle,
  panelParagraph
}) =>
  !isImagePanel ? (
    <div className='grid-panel p-4'>
      <div className='experience-content m-5'>
        <Icon name={iconName} classes='mr-4' />
        <div className='text'>
          <h3 className='mb-2'>{panelTitle}</h3>
          <p className='mb-0'>{panelParagraph}</p>
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
  iconName: PropTypes.string,
  panelTitle: PropTypes.string,
  panelParagraph: PropTypes.string
}

export default ExperiencePanelComponent
