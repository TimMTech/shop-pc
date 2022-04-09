import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/shop-pc">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
