import styled from 'styled-components'

export default styled.footer`
  .grid {
    grid-template-columns: auto;
    text-align: center;
  }

  @media (min-width: 700px) {
    .grid {
      grid-template-columns: 200px auto;
    }

    ul {
      text-align: right;
    }
  }
`
