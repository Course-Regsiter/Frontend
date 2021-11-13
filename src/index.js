import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';
import "./css/index.css";

const GlobalStyles = createGlobalStyle` ${reset}; `;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);