import React from 'react'
import './experience.css'

import webDesignImage from '../../images/webDesign.png'
import wordpressImage from '../../images/wordpress.png'
import appDevImage from '../../images/appDev.png'
import seoImage from '../../images/seo.png'
import ExperiencePanelComponent from './experiencePanel'

const ExperienceWrapperComponent = () => (
  <article id='experienceWrapper' className='p-0'>
    <h2>Experience</h2>
    <div className='grid'>
      <ExperiencePanelComponent
        thumbImageSrc={webDesignImage}
        thumbImageAlt='Web Design icon'
        panelTitle='Website Design'
        panelParagraph='I have built many stunning websites using the latest web technologies that deliver on speed and accessibility.'
      />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent
        thumbImageSrc={wordpressImage}
        thumbImageAlt='WordPress icon'
        panelTitle='WordPress Development'
        panelParagraph='I love creating websites with WordPress, the content management system that allows you to control your content.'
      />
      <ExperiencePanelComponent
        thumbImageSrc={appDevImage}
        thumbImageAlt='App Development icon'
        panelTitle='Mobile App Development'
        panelParagraph='I am capable of building outstanding Mobile applications suitable for both Android and iOS.'
      />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent
        thumbImageSrc={seoImage}
        thumbImageAlt='SEO icon'
        panelTitle='Search Engine Optimisation (SEO)'
        panelParagraph='I have a wealth of experience in optimising websites for search engines so that your users can find you on the web.'
      />
    </div>
  </article>
)

export default ExperienceWrapperComponent
