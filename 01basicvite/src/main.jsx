import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";

const reactElement = React.createElement(
  "a",
  {
    href: "http://google.com",
    target: "_blank",
  },
  "click to visit google"
);

createRoot(document.getElementById("root")).render(reactElement);
