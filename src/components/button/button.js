import React from 'react'
import StyledButton from './styledButton'

const ButtonComponent = ({ className, children, onClick }) => (
  <StyledButton className={className} onClick={onClick}>
    { children }
  </StyledButton>
)

export default ButtonComponent
