import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import config from '../../config'
import StyledFooter from './styledFooter'
import { getRandomInt } from '../../utils'
import Icon from '../icons'

const footerLinks = [
  { name: 'Email', url: `mailto:${config.email}`, icon: 'email' },
  { name: 'LinkedIn', url: config.linkedInUrl, icon: 'linkedin' },
  { name: 'GitHub', url: config.githubUrl, icon: 'github' },
  { name: 'Twitter', url: config.twitterUrl, icon: 'twitter' },
  { name: 'Dev', url: config.devUrl, icon: 'dev' }
]

const FooterComponent = () => {
  const quote = config.quotes[getRandomInt(config.quotes.length - 1)]

  return (
    <StyledFooter className='py-4 bg-light-grey mt-5'>
      <div className='grid not-full-width block-center px-4'>
        <div className='grid-panel'>
          <p className='m-0 py-2'>© Ian Holden {new Date().getFullYear()}</p>
        </div>
        <div className='grid-panel'>
          <ul className='m-0'>
            {footerLinks.map((link, i) => (
              <li className='m-0 pl-4 py-2 inline-block' key={i}>
                <OutboundLink href={link.url} target='_blank' rel='noreferrer noopener'>
                  <Icon name={link.icon} classes='icon-smaller inline-block mr-2' />
                  {link.name}
                </OutboundLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='quote not-full-width color-grey block-center text-center pt-5 f-4 px-4'>
        {quote}
      </div>
    </StyledFooter>
  )
}

export default FooterComponent
