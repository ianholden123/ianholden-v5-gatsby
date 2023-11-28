import styled from 'styled-components'

export default styled.button`
border: 3px solid var(--colorBlue);
color: var(--colorBlue);
font-family: inherit;
font-size: inherit;
background: none;
cursor: pointer;
letter-spacing: 1px;
font-weight: 700;
outline: none;
position: relative;
-webkit-transition: all 0.3s;
-moz-transition: all 0.3s;
transition: all 0.3s;
overflow: hidden;
z-index: 1;
text-shadow: 1px 1px 1px var(--colorWhite); // Make buttons more accessible over darker backgrounds
box-shadow: 1px 1px 1px var(--colorWhite); // Make buttons more accessible over darker backgrounds

a {
  display: inline-block;
  padding: .5rem 1rem;
  text-decoration: none;
}

&:hover, &:active {
  color: var(--colorWhite);
  background-color: var(--colorBlueDark);
  border-color: var(--colorBlueDark);
}

a:hover, a:active {
  color: var(--colorWhite);
  text-decoration: none;
}
`