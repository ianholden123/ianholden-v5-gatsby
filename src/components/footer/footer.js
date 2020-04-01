import React from 'react'
import './footer.css'

const FooterComponent = () => (
  <footer>
    <div className='grid not-full-width'>
      <div className='grid-panel'>
        <p>© Ian Holden {new Date().getFullYear()}</p>
      </div>
      <div className='grid-panel'>
        <ul>
          <li>
            <a href='mailto:ianholdendev@outlook.com'>Email</a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/ianlewisholden'
              target='_blank'
              rel='noreferrer noopener'
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://github.com/ianholden123'
              target='_blank'
              rel='noreferrer noopener'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default FooterComponent
