import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import HeroComponent from "../components/hero/hero"
import ProjectWrapperComponent from "../components/projects/projectWrapper"
import ExperienceWrapperComponent from "../components/experience/experience"
import ContactWrapperComponent from "../components/contact/contact"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ian Holden | Software Engineer | I Build Websites"
      description="Ian Holden is a software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project."
    />
    <HeroComponent />
    <ProjectWrapperComponent />
    <ExperienceWrapperComponent />
    <ContactWrapperComponent />
  </Layout>
)

export default IndexPage
