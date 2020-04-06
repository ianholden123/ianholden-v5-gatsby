import React from 'react'
import config from '../../config'

const buttons = [
  { name: 'Email', url: config.email },
  { name: 'LinkedIn', url: config.linkedInUrl }
]

const ContactWrapperComponent = () => (
  <article
    id='contactWrapper'
    className='text-center p-4 not-full-width block-center m-0 px-4 py-5'
  >
    <h2 className='uppercase'>Contact Me</h2>
    <p>
      If you would like to work with me on a project, I would be more than happy
      to help! Get in touch by using one of the following channels below:
    </p>
    { buttons.map((button, index) => (
      <button className='mx-4' key={index}>
        <a href={button.url} target='_blank' rel='noreferrer noopener'>
          {button.name}
        </a>
      </button>
    ))}
  </article>
)

export default ContactWrapperComponent
