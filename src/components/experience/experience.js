import React from 'react'
import './experience.css'
import ExperiencePanelComponent from './experiencePanel'
import webDesignImage from '../../images/webDesign.png'
import wordpressImage from '../../images/wordpress.png'
import appDevImage from '../../images/appDev.png'
import seoImage from '../../images/seo.png'
import mobileDesign from '../../images/mobileDesign.jpg'
import webDesign from '../../images/webDesign.jpg'
import ianImage from '../../images/ian.jpg'
import typingAtMacbook from '../../images/typingAtMacbook.jpg'

const ExperienceWrapperComponent = () => (
  <article id='experienceWrapper' className='px-0 m-0 py-5'>
    <h2 className='text-center uppercase'>Experience</h2>
    <div className='grid'>
      <ExperiencePanelComponent
        thumbImageSrc={webDesignImage}
        thumbImageAlt='Web Design icon'
        panelTitle='Website Design'
        panelParagraph='I have built many stunning websites using the latest web technologies that deliver on speed and accessibility.'
      />
      <ExperiencePanelComponent
        isImagePanel
        imagePanelImage={webDesign}
      />
      <ExperiencePanelComponent
        isImagePanel
        imagePanelImage={typingAtMacbook}
      />
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
      <ExperiencePanelComponent
        isImagePanel
        imagePanelImage={mobileDesign}
      />
      <ExperiencePanelComponent
        isImagePanel
        imagePanelImage={ianImage}
      />
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
