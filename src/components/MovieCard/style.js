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
/* border: px solid #42B549; */
background: #2A2A2A;
border-radius: 5px;
color: #FFF;
min-height: 500px;
padding-bottom: 5%;
width: 100%;
height: auto;
position: relative;

  h3 {
    text-decoration: none;
    width: 90%;
    margin: 0 auto;
    font-size: 1rem;
    margin-top: 10px;
  }
  img {
    width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  h4 {
    padding: 0;
    margin: 0;
  }

  p {
    height: 0;
    opacity: 0;
    visibility: hidden;
    margin: 5px;
    line-height: 1.5em;
  }

  &:hover p {
    position: absolute;
    top: 49%;
    left: 48%;
    transform: translate(-50%, -50%);
    opacity: 0.7;
    width: 92.5%;
    height: 80% !important;
    /* margin: 0 auto; */
    background-color: rgba(0,0,0,.8);
    height: auto;
    color: white;
    opacity: 1;
    visibility: visible;
    z-index: 999;
    transition: all .2s ease;
    padding: 20% 4%;
    border-radius: 5px;
    align-self: center;
    text-align: left;
    font-size: 0.9rem;
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