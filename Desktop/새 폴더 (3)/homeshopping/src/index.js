import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        background-color:rgba(0,0,0,1);
        color: white;
        padding-top: 50px;
    }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

