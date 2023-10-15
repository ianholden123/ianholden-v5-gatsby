import React from 'react'
import StyledExperience from './styledExperience'
import ExperiencePanelComponent from './experiencePanel'

const ExperienceWrapperComponent = () => (
  <StyledExperience className="px-0 m-0 py-5">
    <h2 className="text-center">Experience</h2>
    <div className="grid">
      <ExperiencePanelComponent
        iconName="webdev"
        panelTitle="Frontend Development"
        panelParagraph="I have built many stunning websites and user interfaces using the latest web technologies that deliver on speed and accessibility."
      />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent isImagePanel />
      <ExperiencePanelComponent
        iconName="seo"
        panelTitle="Search Engine Optimisation (SEO)"
        panelParagraph="I have experience in optimising websites for search engines so that your users can find you on the web."
      />
    </div>
  </StyledExperience>
)

export default ExperienceWrapperComponent
