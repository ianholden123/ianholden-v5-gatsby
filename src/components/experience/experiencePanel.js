import React from 'react'
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
          <h3 className='mb-2' dangerouslySetInnerHTML={{ __html: panelTitle }} />
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

export default ExperiencePanelComponent
