import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <App />, rootElement);
} else {
  render(  
    <App />,
  rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// "[\"80021\",\"80020\",\"80025\",\"80026\",\"80027\",\"80031\",\"80301\",\"80302\",\"80303\",\"80304\",\"80305\",\"80309\",\"80455\",\"80501\",\"80503\",\"80504\",\"80516\",\"80542\",\"80544\",\"80035\",\"80036\",\"80038\",\"80306\",\"80307\",\"80308\",\"80314\",\"80502\",\"80533\"]"