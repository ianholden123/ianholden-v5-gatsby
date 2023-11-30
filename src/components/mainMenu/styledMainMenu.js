import styled from 'styled-components'

export default styled.nav`
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;

  .main-bar {
    display: flex;
    justify-content: space-between;
  }

  .brand {
    letter-spacing: 0;
  }

  .menu-items {
    padding: 5px;
    display: flex;
    gap: 20px;
  }

  .menu-items,
  .menu-items li {
    list-style: none;
  }
`
