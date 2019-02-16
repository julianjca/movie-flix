import styled from 'styled-components';

export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
flex-direction: row;
align-items: center;
width: 80%;
margin: 0 auto;
color: #FFF;
  a {
    text-decoration: none;
    color: #FFF;
  }
  h1 {
    font-size: 2.7rem;
    color: #42B549;
  }
`;

export const InnerDiv = styled.div`
display: inline-block;
width: 30%;
  h3, span {
    display: inline-block;
  }
  h3 {
    padding-right: 3%;
    font-weight: 300;
  }
`