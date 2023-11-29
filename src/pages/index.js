import * as React from "react"
import Layout from '../components/layout/layout'
import Seo from '../components/seo/seo'
import HeroComponent from '../components/hero/hero'
import ProjectsComponent from '../components/projects/projects'
import ContactWrapperComponent from '../components/contact/contact'
import BlogPosts from '../components/blogPosts/blogPosts'
import TechnologiesComponent from "../components/technologies/technologies"

const IndexPage = () => (
  <Layout>
    <Seo
      title='Ian Holden | Software Engineer'
      description='Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.'
      pathName='/'
    />
    <HeroComponent />
    <ProjectsComponent />
    <TechnologiesComponent />
    <BlogPosts />
    <ContactWrapperComponent />
  </Layout>
)

export default IndexPage
