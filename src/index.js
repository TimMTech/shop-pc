import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import SupportAdmin from "./pages/SupportAdminPage";

const path = window.location.pathname;

ReactDOM.render(
  <React.StrictMode>
    {path.indexOf("/support") === -1 ? (
      <Router basename="/shop-pc">
        <App />
      </Router>
    ) : (
      <SupportAdmin />
    )}
  </React.StrictMode>,
  document.getElementById("root")
);
