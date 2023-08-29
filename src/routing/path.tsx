import { Routes, Route } from "react-router-dom";
import Home from "../layout";
import About from "../pages/about";
import Interest from "../pages/interest/index.";
import Contact from "../pages/contact";
import Skills from "../pages/skills";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/interest" element={<Interest/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/skills" element={<Skills/>} /> 
      </Routes>
    </>
  );
}