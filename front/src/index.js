import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </React.StrictMode>
);
