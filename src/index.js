import React from 'react';
//import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
  <EasybaseProvider ebconfig={ebconfig}>
    <App />
  </EasybaseProvider>
  , rootElement);
} else {
  render(  
  <EasybaseProvider ebconfig={ebconfig}>
    <App />,
  </EasybaseProvider>, 
  rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
