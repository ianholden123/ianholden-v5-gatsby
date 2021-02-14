import React from 'react'
import './experience.css'
import ExperiencePanelComponent from './experiencePanel'

const ExperienceWrapperComponent = () => (
  <article id='experienceWrapper' className='px-0 m-0 py-5'>
    <h2 className='text-center'>Experience</h2>
    <div className='grid'>
      <ExperiencePanelComponent
        iconName='webdev'
        panelTitle='Frontend Development'
        panelParagraph='I have built many stunning websites and user interfaces using the latest web technologies that deliver on speed and accessibility.'
      />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent
        iconName='appdev'
        panelTitle='Mobile App Development'
        panelParagraph='I am capable of building outstanding hybrid applications suitable for web browsers, Android and iOS devices.'
      />
      <ExperiencePanelComponent
        iconName='seo'
        panelTitle='Search Engine Optimisation (SEO)'
        panelParagraph='I have experience in optimising websites for search engines so that your users can find you on the web.'
      />
      <ExperiencePanelComponent isImagePanel />
    </div>
  </article>
)

export default ExperienceWrapperComponent
