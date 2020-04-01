import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found | Ian Holden' />
    <article>
      <div className='not-full-width block-center'>
        <h1>Page not found</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </div>
    </article>
  </Layout>
)

export default NotFoundPage
