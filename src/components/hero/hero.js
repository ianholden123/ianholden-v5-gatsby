import React from 'react'
import './hero.css'
import background from '../../images/homeBanner.jpg'
import { createRelativeLink } from '../../utils'

const HeroComponent = () => (
  <article id='heroWrapper' className=''>
    <div className='hero' style={{ backgroundImage: `url(${createRelativeLink(background)})` }}>
      <div className='content'>
        <div className='name px-4 py-3'>
          <h1 className='color-white uppercase'>
            <span className='line1'>Ian</span>
            <br/>
            <span className='line2'>Holden</span>
          </h1>
          <h2 className='color-light-grey uppercase'>
            <span className='line3'>Software</span>
            <br/>
            <span className='line4'>Engineer</span>
          </h2>
        </div>
        <div className='arrow-down'></div>
      </div>
    </div>
  </article>
)

export default HeroComponent
