import React from 'react'
import './footer.css'
import config from '../../config'

const footerLinks = [
  { name: 'Email', url: config.email },
  { name: 'LinkedIn', url: config.linkedInUrl },
  { name: 'GitHub', url: config.githubUrl }
]

const FooterComponent = () => (
  <footer className='p-4 bg-light-grey mt-5'>
    <div className='grid not-full-width'>
      <div className='grid-panel'>
        <p className='m-0 py-2'>© Ian Holden {new Date().getFullYear()}</p>
      </div>
      <div className='grid-panel'>
        <ul className='m-0'>
          {footerLinks.map((link, i) => (
            <li className='m-0 pl-4 py-2 inline-block' key={i}>
              <a href={link.url} target='_blank' rel='noreferrer noopener'>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)

export default FooterComponent
