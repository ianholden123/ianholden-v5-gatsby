import React from 'react'
import './contact.css'

const ContactWrapperComponent = () => (
  <article id='contactWrapper'>
    <h2>Contact Me</h2>
    <p>
      If you would like to work with me on a project, I would be more than happy
      to help! Get in touch by using one of the following channels below:
    </p>
    <p>
      <a href='mailto:ianholdendev@outlook.com'>
        <button>Email</button>
      </a>
      <a
        href='https://www.linkedin.com/in/ianlewisholden'
        target='_blank'
        rel='noreferrer noopener'
      >
        <button>LinkedIn</button>
      </a>
    </p>
  </article>
)

export default ContactWrapperComponent
