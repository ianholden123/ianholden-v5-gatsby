import styled from 'styled-components'

export default styled.footer`
  .grid {
    display: grid;
    grid-template-columns: auto;
    text-align: center;
  }

  .icon-smaller {
    position: relative;
    top: 4px;
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
