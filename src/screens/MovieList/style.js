import styled from 'styled-components';

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap: 40px 10px;
width: 80%;
margin: 0 auto;
  svg {
    margin: 0 auto;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
`;