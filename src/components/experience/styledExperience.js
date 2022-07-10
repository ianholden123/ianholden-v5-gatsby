import styled from 'styled-components'

export default styled.article`
  position: relative;
  z-index: 0;

  .grid {
    grid-template-columns: 1fr;
    grid-gap: 0
  }

  .image-panel {
    background-color: var(--colorLightGrey);
  }

  .grid-panel:nth-child(2):before {
    content: ' ';
    display: block;
    height: 100%;
    width: 10%;
    background-color: var(--colorWhite);
  }

  .grid-panel:nth-child(3):before,
  .grid-panel:nth-child(7):before {
    content: ' ';
    display: block;
    height: 100%;
    width: 10%;
    float: right;
    background-color: var(--colorWhite);
  }

  .grid-panel:nth-child(6):before {
    content: ' ';
    display: block;
    float: left;
    height: 100%;
    width: 10%;
    background-color: var(--colorWhite);
  }

  .grid-panel:nth-child(1n) .experience-content {
      display: grid;
      align-items: center;
      margin: 10px 0;
      text-align: left;
      grid-template-columns: 75px auto;
  }

  .grid-panel:nth-child(1n) .experience-content .text {
      margin-left: 20px;
  }

  .grid-panel:nth-child(2n) .experience-content .text {
      margin-right: 20px;
  }

  @media (min-width: 700px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }

    .grid-panel:nth-child(1n) .experience-content {
      margin: 40px 0;
    }

    .grid-panel:nth-child(1n) .experience-content .icon {
      width: 100%;
    }
  }

  @media (min-width: 1000px) {
    .grid-panel:nth-child(1n) .experience-content {
        margin-left: calc(100% + 30px - (var(--gridWrapperWidth) / 2));
        margin-right: 0;
    }

    .grid-panel:nth-child(2n) .experience-content {
        margin-left: 0;
        margin-right: calc(100% + 30px - (var(--gridWrapperWidth) / 2));
    }
  }
`
