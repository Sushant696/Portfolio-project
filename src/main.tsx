import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/path";
import "./tailwindcss.css" 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routing/>
    </BrowserRouter>
  </React.StrictMode>
);
