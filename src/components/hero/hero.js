import React from 'react'
import './hero.css'

const HeroComponent = () => (
  <article id='heroWrapper' className=''>
    <div className='hero'>
      <div className='content'>
        <div className='name p-4'>
          <h1 className='color-white'>
            <span className='line1'>IAN</span>
            <br/>
            <span className='line2'>HOLDEN</span>
          </h1>
          <h2 className='color-light-grey'>
            <span className='line3'>SOFTWARE</span>
            <br/>
            <span className='line4'>ENGINEER</span>
          </h2>
        </div>
        <div className='arrow-down'></div>
      </div>
    </div>
  </article>
)

export default HeroComponent
