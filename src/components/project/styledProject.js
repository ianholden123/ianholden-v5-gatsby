import styled from 'styled-components'

export default styled.div`
#projects .grid {
  grid-template-columns: 1fr;
  grid-gap: 0;
}

.tool {
  border: 4px double var(--colorGrey);
  padding: 15px;
}

.colour {
  border: 4px double var(--colorGrey);
  width: 50px;
  height: 50px;
}

@media (min-width: 700px) {
  #projects .grid {
    grid-template-columns: 1fr 1fr;
  }
}
`