import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './footer.css'
import config from '../../../config'
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
  const quotes = [
    `"You’re not delivering a perfect body to the grave, time is not there to be saved" – Frank Turner`,
    `"Saddle your horse. Shoulder your load. Burst at the seams. Be what you dream and then take to the road." – Frank Turner`,
    `"We can get better, because we’re not dead yet." – Frank Turner`
  ]

  const quote = quotes[getRandomInt(quotes.length - 1)]

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
                <OutboundLink href={link.url} target='_blank' rel='noreferrer noopener'>
                  <Icon name={link.icon} classes='icon-smaller inline-block mr-2 pos-rel top-4' />
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
    </footer>
  )
}

export default FooterComponent
