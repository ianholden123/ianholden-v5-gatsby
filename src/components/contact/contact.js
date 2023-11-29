import React from 'react'
import config from '../../config'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Button from '../button/button'

const ContactWrapperComponent = () => (
  <article
    id='contactWrapper'
    className='not-full-width block-center px-4 py-6'
  >
    <h2>Contact Me</h2>
    <p className='reading-content'>
      If you would like to work with me on a project, I would be more than happy
      to help! Get in touch by using one of the following channels below:
    </p>
    <Button className='mr-5 uppercase'>
      <OutboundLink href={`mailto:${config.email}`} target='_blank' rel='noreferrer noopener'>
        Email
      </OutboundLink>
    </Button>
    <Button className='mr-5 uppercase'>
      <OutboundLink href={config.linkedInUrl} target='_blank' rel='noreferrer noopener'>
        LinkedIn
      </OutboundLink>
    </Button>
  </article>
)

export default ContactWrapperComponent
