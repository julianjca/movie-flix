import styled from 'styled-components';

export const GridContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;
width: 100%;
  svg {
    margin: 0 auto;
    text-align: center;
  }
  a {
    text-decoration: none;
  }
`;