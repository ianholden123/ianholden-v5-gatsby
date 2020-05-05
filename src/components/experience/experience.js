import React from 'react'
import './experience.css'
import ExperiencePanelComponent from './experiencePanel'

const ExperienceWrapperComponent = () => (
  <article id='experienceWrapper' className='px-0 m-0 py-5'>
    <h2 className='text-center uppercase'>Experience</h2>
    <div className='grid'>
      <ExperiencePanelComponent
        iconName='webdev'
        panelTitle='Website Design'
        panelParagraph='I have built many stunning websites using the latest web technologies that deliver on speed and accessibility.'
      />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent
        iconName='wordpress'
        panelTitle='WordPress Development'
        panelParagraph='I love creating websites with WordPress, the content management system that allows you to control your content.'
      />
      <ExperiencePanelComponent
        iconName='appdev'
        panelTitle='Mobile App Development'
        panelParagraph='I am capable of building outstanding Mobile applications suitable for both Android and iOS.'
      />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent
        iconName='seo'
        panelTitle='Search Engine Optimisation (SEO)'
        panelParagraph='I have experience in optimising websites for search engines so that your users can find you on the web.'
      />
    </div>
  </article>
)

export default ExperienceWrapperComponent
