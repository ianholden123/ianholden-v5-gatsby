import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeroComponent from "../components/hero"
import ProjectWrapperComponent from "../components/projects/projectWrapper"
import ExperienceWrapperComponent from "../components/experience/experience"
import ContactWrapperComponent from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ian Holden | Software Engineer | I build websites"
      description="Ian Holden is a software engineer from the south east, UK. He builds stunning websites and has experience in SEO &amp; hybrid app development."
    />
    <HeroComponent />
    <ProjectWrapperComponent />
    <ExperienceWrapperComponent />
    <ContactWrapperComponent />
  </Layout>
)

export default IndexPage
