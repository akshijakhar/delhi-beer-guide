import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // This is the correct place to import your CSS

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
