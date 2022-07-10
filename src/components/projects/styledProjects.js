import styled from 'styled-components'

export default styled.article`
img.logo {
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 0;
}

img:first-child {
  margin: 0;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  -webkit-box-shadow: 0 3px 15px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 3px 15px rgba(0,0,0,0.2);
}

.hsItem {
  position: relative;
}

.hsItem.blank {
  border: 4px dashed grey;
}

.hsItem.blank.link {
  border-color: var(--colorBlue);
}

.hsItem.blank.link:hover,
.hsItem.blank.link:active,
.hsItem.blank.link:focus {
 border-color: var(--colorBlueDark);
}

.hsItem.blank p {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
`
