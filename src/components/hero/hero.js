import React from 'react'
import StyledHero from './styledHero'

const HeroComponent = () => (
  <StyledHero id="heroWrapper">
    <div className="hero">
      <div className="content">
        <div
          className="name inline-block px-4 py-3"
          itemScope
          itemType="http://schema.org/Person"
        >
          <h1 className="color-white uppercase">
            <span className="line1" itemProp="givenName">
              Ian
            </span>
            <br />
            <span className="line2" itemProp="familyName">
              Holden
            </span>
          </h1>
          <h2 className="color-grey uppercase" itemProp="jobTitle">
            <span className="line3">Software</span>
            <br />
            <span className="line4">Engineer</span>
          </h2>
        </div>
        <div className="arrow-down"></div>
      </div>
    </div>
  </StyledHero>
)

export default HeroComponent
