import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='Page Not found | Ian Holden' />
    <article className='not-full-width block-center m-0 px-4 py-5'>
      <h1>Page not found</h1>
      <p>I&apos;m sorry, we could not find the page that you are looking for.</p>
    </article>
  </Layout>
)

export default NotFoundPage
