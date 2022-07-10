import styled from 'styled-components'

export default styled.div`
/* Flex - fallback for browsers that do not support grid yet. */
display: flex;
flex-wrap: wrap;

& > * {
  /* Flex - fallback for browsers that do not support grid yet. */
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}

margin: 0 auto;
display: grid;
grid-gap: var(--gridGap);
grid-template-columns: 1fr 1fr;

@supports (display: grid) {
  & > * {
    /* We need to set the margin used on flex items to 0 as we have gaps in grid. */
    margin: 0;
  }
}

@media (max-width: 700px) {
  grid-template-columns: 1fr; 
}
`