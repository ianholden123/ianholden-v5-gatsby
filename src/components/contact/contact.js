import React from 'react'
import config from '../../config'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import PropTypes from 'prop-types'

const buttons = [
  { name: 'Email', url: config.email },
  { name: 'LinkedIn', url: config.linkedInUrl }
]

const ContactWrapperComponent = ({ isHomePage }) => (
  <article
    id='contactWrapper'
    className='not-full-width block-center px-4 py-6'
  >
    { !isHomePage && <h1 className='uppercase'>Contact Me</h1> }
    { isHomePage && <h2 className='uppercase'>Contact Me</h2> }
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

ContactWrapperComponent.defaultProps = {
  isHomePage: false
}

ContactWrapperComponent.propTypes = {
  isHomePage: PropTypes.bool.isRequired
}
