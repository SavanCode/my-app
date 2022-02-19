// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./app";

// ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import RouterSample from "./RouterSample";
import App from "./app";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <RouterSample />
    </Router>
  </StrictMode>,
  rootElement
);
