import styled from 'styled-components'

export default styled.nav`
width: 100%;
z-index: 100;
position: absolute;
top: 0;

&.show {
  background-color: var(--colorWhite);
  border-bottom: 1px solid var(--colorDarkGrey);
  -webkit-box-shadow: 0 10px 6px -6px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 10px 6px -6px rgba(0,0,0,0.2);
  box-shadow: 0 10px 6px -6px rgba(0,0,0,0.2);
}

.main-bar {
  display: flex;
  justify-content: space-between;
}

.brand {
  letter-spacing: 0;
}

.menu-items {
  display: none;
}

&.show .menu-items {
  display: block;
}

ul,
ul li {
  list-style: none;
}

/*****************************************************************
* MENU ICON ******************************************************
*****************************************************************/
.nav-icon {
  width: 20px;
}

button .nav-icon:after,
button .nav-icon:before,
button .nav-icon div {
  background-color: var(--colorBlue);
  border-radius: 3px;
  content: '';
  display: block;
  height: 3px;
  margin: 4px 0;
  transition: all .2s ease-in-out;
}

&.show .nav-icon:before {
  transform: translateY(7px) rotate(135deg);
}

&.show .nav-icon:after {
  transform: translateY(-7px) rotate(-135deg);
}

&.show .nav-icon div {
  transform: scale(0);
}

button:hover .nav-icon:after,
button:active .nav-icon:after,
button:hover .nav-icon:before,
button:active .nav-icon:before,
button:hover .nav-icon div,
button:active .nav-icon div {
  background-color: var(--colorWhite);
}
`