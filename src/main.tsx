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
// use route and routes path.tsx will do all the job make an object inside which you will use routes and route element and everything will be handled there and regarding the routing the navbar is also involved somewhat in the routing project 