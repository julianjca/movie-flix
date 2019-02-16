import styled from 'styled-components';

export const Div = styled.div`
font-family: 'Open Sans';
text-decoration: none;
color: black;
/* display: flex;
justify-content: center;
align-items: center; */
flex-direction: column;
margin: 0 auto;
border: 1px solid #FFF;
background: #FFF;
border-radius: 5px;
color: #1a1a1a;
min-height: 500px;
padding-bottom: 5%;
  h3 {
    text-decoration: none;
    width: 90%;
    margin: 0 auto;
    font-size: 1rem;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  h4 {
    padding: 0;
    margin: 0;
  }
`;

export const Owned = styled.h4`
color: white;
background-color: green;
cursor: pointer;
font-size: 10px;
font-weight: 700;
border-radius: 5px;
text-align: center;
margin: 0 auto !important;
margin-top: 5px !important;
max-width: 100px;
text-decoration: none;
text-transform: uppercase;
width: 100%;
`;