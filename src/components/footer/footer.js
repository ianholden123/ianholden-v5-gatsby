import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import './footer.css'
import config from '../../config'
import { getRandomInt } from '../../utils'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const footerLinks = [
  { name: 'Email', url: config.email },
  { name: 'LinkedIn', url: config.linkedInUrl },
  { name: 'GitHub', url: config.githubUrl }
]

const FooterComponent = () => {
  const FOOTER_QUERY = graphql`
    query FOOTER_QUERY {
      wpgraphql {
        quotes {
          nodes {
            title(format: RENDERED)
            content(format: RENDERED)
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={FOOTER_QUERY}
      render={({
        wpgraphql: {
          quotes: { nodes: allQuotes }
        }
      }) => {
        const { content: quote } = allQuotes[getRandomInt(allQuotes.length - 1)]
        return (
          <footer className='py-4 bg-light-grey mt-5'>
            <div className='grid not-full-width px-4'>
              <div className='grid-panel'>
                <p className='m-0 py-2'>© Ian Holden {new Date().getFullYear()}</p>
              </div>
              <div className='grid-panel'>
                <ul className='m-0'>
                  {footerLinks.map((link, i) => (
                    <li className='m-0 pl-4 py-2 inline-block' key={i}>
                      <OutboundLink href={link.url} target='_blank' rel='noreferrer noopener'>{link.name}</OutboundLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className='quote not-full-width color-grey block-center text-center pt-5 f-4 px-4'
              dangerouslySetInnerHTML={{ __html: quote }}
            />
          </footer>
        )
      }}
    />
  )
}

export default FooterComponent
