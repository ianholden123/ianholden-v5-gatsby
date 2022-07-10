import React from 'react'
import StyledGrid from './styledGrid'

const GridComponent = ({ children, className, id }) => (
  <StyledGrid id={id} className={className}>
    {children}
  </StyledGrid>
)

export default GridComponent
