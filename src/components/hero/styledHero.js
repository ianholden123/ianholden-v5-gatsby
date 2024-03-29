import styled from 'styled-components'
import ian from '../../images/ian.jpg'
import ian800 from '../../images/ian800.jpg'
import ian1200 from '../../images/ian1200.jpg'

export default styled.article`
  .hero {
    display: table;
    height: 100vh;
    text-align: center;
    width: 100%;
    background-image: url(${ian800});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }

  .hero .content {
    background-color: rgba(0, 0, 0, 0.7);
    vertical-align: middle;
    display: table-cell;
  }

  .hero .content .name {
    border: 8px double var(--colorWhite);
  }

  .hero .content h1 {
    font-size: 2.5em;
    margin: 0;
  }

  .hero .content h2 {
    margin: 0;
    font-size: 1.45em;
  }

  .hero .content h1 .line1 {
    font-size: 6.4rem;
    line-height: 0.8;
  }
  .hero .content h1 .line2 {
    font-size: 2.78rem;
    line-height: 0;
  }
  .hero .content h2 .line3 {
    font-size: 2rem;
    line-height: 0.9;
  }
  .hero .content h2 .line4 {
    font-size: 2.2rem;
    line-height: 1;
  }

  .hero .arrow-down {
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid var(--colorWhite);
  }

  @media (min-width: 700px) {
    .hero {
      background-image: url(${ian1200});
    }
  }

  @media (min-width: 1000px) {
    .hero {
      background-image: url(${ian});
    }
  }
`
