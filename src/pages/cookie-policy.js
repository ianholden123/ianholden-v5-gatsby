import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'

const CookiePolicyPage = () => (
  <Layout>
    <SEO
      title='Cookie Policy | Ian Holden'
      description='We use cookies on our site. Find out about how we use them to improve your experience here.'
    />
    <article
      id='cookieNoticeWrapper'
      className='not-full-width block-center px-4 py-6'
    >
      <h1>Cookie Policy</h1>
      <div>
        <p>This site uses cookies – small text files that are placed on your machine to help the site provide a better user experience. In general, cookies are used to retain user preferences, store information for things like shopping baskets, and provide anonymous tracking data to applications like Google Analytics. No personally identifiable information is collected about you unless you explicitly submit that information on this website.</p>
        <p>Some examples of how cookies are used on this site include:</p>
        <ul>
          <li>To store anonymous information about the pages that you visit and how you arrived/navigated to that page.</li>
          <li>Remembering which pop-up modals you may have already seen and previously dismissed to stop them from popping up again.</li>
        </ul>
        <p>Generally, cookies make your browsing experience better. However, you may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest consulting the Help section of your browser.</p>
        <p>For further information about how Google Analytics uses cookies and IP address data, see: <a href='https://support.google.com/analytics/answer/2838718?hl=en'>https://support.google.com/analytics/answer/2838718?hl=en</a>.</p>
      </div>
    </article>
  </Layout>
)

export default CookiePolicyPage
