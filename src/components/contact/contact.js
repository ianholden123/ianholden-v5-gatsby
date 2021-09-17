import React from 'react'
import config from '../../config'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'

const buttons = [
  { name: 'Email', url: `mailto:${config.email}` },
  { name: 'LinkedIn', url: config.linkedInUrl }
]

const ContactWrapperComponent = ({ isContactPage = false }) => (
  <article
    id='contactWrapper'
    className='not-full-width block-center px-4 py-6'
  >
    { isContactPage && <h1>Contact Me</h1> }
    { !isContactPage && <h2>Contact Me</h2> }
    <p className='reading-content'>
      If you would like to work with me on a project, I would be more than happy
      to help! Get in touch by using one of the following channels below:
    </p>
    { buttons.map((button, index) => (
      <button className='mr-5 uppercase' key={index}>
        <OutboundLink href={button.url} target='_blank' rel='noreferrer noopener'>
          {button.name}
        </OutboundLink>
      </button>
    ))}
  </article>
)

export default ContactWrapperComponent

ContactWrapperComponent.propTypes = {
  isContactPage: PropTypes.bool
}
