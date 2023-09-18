import { Routes, Route } from "react-router-dom";


import Interest from "../pages/interest/index.";
import Contact from "../pages/contact";
import Skills from "../pages/skills";
import Homepage from "../pages/homepage";
import Aboutlayout from "../pages/about/layout";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutlayout/>} />
        <Route path="/interest" element={<Interest/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/skills" element={<Skills/>} /> 
      </Routes>
    </>
  );
}