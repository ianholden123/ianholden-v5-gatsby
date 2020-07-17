import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ContactWrapperComponent from '../components/contact/contact'

const IndexPage = () => (
  <Layout>
    <SEO
      title='Contact Me | Software Engineer | Ian Holden'
      description='Ian Holden is a software Engineer based in Kent, UK. Get in touch to see how Ian can help you build your next web project.'
    />
    <ContactWrapperComponent isContactPage />
  </Layout>
)

export default IndexPage
