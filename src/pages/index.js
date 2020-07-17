import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import HeroComponent from '../components/hero/hero'
import ProjectsComponent from '../components/projects/projects'
import ExperienceWrapperComponent from '../components/experience/experience'
import LatestPostsComponent from '../components/LatestPosts/latestPosts'
import ContactWrapperComponent from '../components/contact/contact'

const IndexPage = () => (
  <Layout>
    <SEO
      title='Ian Holden | Software Engineer'
      description='Ian Holden is a Software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.'
    />
    <HeroComponent />
    <ProjectsComponent />
    <ExperienceWrapperComponent />
    <LatestPostsComponent />
    <ContactWrapperComponent isHomePage />
  </Layout>
)

export default IndexPage
