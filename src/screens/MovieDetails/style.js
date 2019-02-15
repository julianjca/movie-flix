import styled from 'styled-components';

export const OuterDiv = styled.div`
width: 80%;
margin: 0 auto;
`

export const Div = styled.div`
display: flex;
margin: 0 auto;
/* width: 80%; */
justify-content: space-around;
`;

export const H1 = styled.h1`
text-align: left;
font-size: 2.5rem;
text-transform: uppercase;
`

export const InnerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
  p {
    width: 50%;
    font-size: 1.2rem;
  }
`