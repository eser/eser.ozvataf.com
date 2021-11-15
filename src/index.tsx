import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./app/app";
import reportWebVitals from "./report-web-vitals";

// environment variables
const { SERVE } = process.env;

const rootElement = document.getElementById("root");
const renderer = rootElement?.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderer(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);

if (SERVE && module.hot) {
  module.hot.accept();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(if (process.env.CONSOLE === "ON") console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
