import React from "react"

import ExperiencePanelComponent from "./experiencePanel"

const ExperienceWrapperComponent = () => (
    <div id="experienceWrapper">
        <h2>Experience</h2>
        <div class="grid">
            <ExperiencePanelComponent
                isImagePanel={false}
                thumbImageSrc="assets/webDesign.png"
                thumbImageAlt="Web Design icon"
                panelTitle="Website Design"
                panelParagraph="I have built many stunning websites using the latest web technologies that deliver on speed and accessibility."
            />
            <ExperiencePanelComponent isImagePanel={true} />
            <ExperiencePanelComponent isImagePanel={true} />
            <ExperiencePanelComponent
                isImagePanel={false}
                thumbImageSrc="assets/wordpress.png"
                thumbImageAlt="WordPress icon"
                panelTitle="WordPress Development"
                panelParagraph="I love creating websites with WordPress, the content management system that allows you to control your content."
            />
            <ExperiencePanelComponent
                isImagePanel={false}
                thumbImageSrc="assets/appDev.png"
                thumbImageAlt="App Development icon"
                panelTitle="Mobile App Development"
                panelParagraph="I am capable of building outstanding Mobile applications suitable for both Android and iOS."
            />
            <ExperiencePanelComponent isImagePanel={true} />
            <ExperiencePanelComponent isImagePanel={true} />
            <ExperiencePanelComponent
                isImagePanel={false}
                thumbImageSrc="assets/seo.png"
                thumbImageAlt="SEO icon"
                panelTitle="Search Engine Optimisation (SEO)"
                panelParagraph="I have a wealth of experience in optimising websites for search engines so that your users can find you on the web."
            />
        </div>
    </div>
)

export default ExperienceWrapperComponent