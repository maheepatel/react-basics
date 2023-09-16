import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const AnotherElement = (
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

const reactLement = React.createElement(
  "a",
  { href: "http://google.com", target: "_blank" },
  "click to visit google"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // AnotherElement
  reactLement
);
