import styled from 'styled-components'

const StyledTechnologies = styled.article`
  .technologies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 700px) {
    .technologies {
      grid-template-columns: repeat(6, 1fr);
    }
  }
`

export default StyledTechnologies
