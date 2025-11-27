import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Blueprint CSS
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

// Your app layout CSS
import "./App.css"; // or "./app.css" – match the actual file name

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);