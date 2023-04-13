import React from "react";
import ReactDOM from "react-dom/client";
import { seeds } from "./tests/seeds";
import App from "./App";
import "./index.css";
import "unfonts.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
