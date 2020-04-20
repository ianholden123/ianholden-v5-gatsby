import React from 'react'
import './hero.css'

const HeroComponent = () => (
  <article id='heroWrapper'>
    <div className='hero'>
      <div className='content'>
        <div className='name inline-block px-4 py-3'>
          <h1 className='color-white uppercase'>
            <span className='line1'>Ian</span>
            <br/>
            <span className='line2'>Holden</span>
          </h1>
          <h2 className='color-grey uppercase'>
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
