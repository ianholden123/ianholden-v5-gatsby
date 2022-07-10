import styled from 'styled-components'

export default styled.div`
display: flex;
flex-wrap: nowrap;
overflow-x: auto;
justify-content: center;
-webkit-overflow-scrolling: touch;

&::-webkit-scrollbar {
  display: none;
}

&:before, &:after {
  content: '';
  padding: 0 1px;
}

.hsItem {
  flex: 0 0 auto;
  margin: 20px;
  width: 70%;
  max-width: 300px;
}

.hsItem:first-child {
  margin-left: calc(var(--gutter) * 2);
}

.hsItem:last-child {
  margin-right: calc(var(--gutter) * 2);
}

.hsItem img {
  max-width: 100%;
}

/* 
 * It would be nice to find a more dynamic solution than this.
 * If we change the number of projects that we display on the 
 * front-end, we need to change the max-width value. Not ideal.
 */
@media (max-width: 1403px) { 
  justify-content: normal;
}
`