import styled, { css } from 'styled-components';

export const OuterDiv = styled.div`
width: 80%;
margin: 0 auto;
font-family: 'Open Sans';
padding-bottom: 5%;
`

export const Div = styled.div`
display: flex;
margin: 0 auto;
/* width: 80%; */
justify-content: space-around;
  img {
    width: 50%;
    height: auto;
  }
`;

export const H1 = styled.h1`
text-align: left;
font-size: 2.2rem;
text-transform: uppercase;
`

export const InnerDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
width: 90%;
  p {
    width: 70%;
    font-size: 1rem;
  }
  h2 {
    text-align: left;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    font-weight: 700;
  }
`;

export const Button = styled.a`
color: black;
background-color: #FFF;
cursor: pointer;
font-size:16px;
font-weight: 700;
line-height: 45px;
border-radius: 5px;
text-align: center;
margin: 0 auto;
max-width: 160px;
text-decoration: none;
text-transform: uppercase;
width: 100%;
${props=> props.inactive && css`
background-color: green;
color: white;
`}
`