import { Routes, Route } from "react-router-dom";
import Skills from "../pages/skills";
import Homepage from "../pages/homepage";
import Aboutlayout from "../pages/about/layout";
import ContactLayout from "../pages/contact/layout";
import Interestlayout from "../pages/interest/layout";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutlayout />} />
        <Route path="/interest" element={<Interestlayout/>} />
        <Route path="/contact" element={<ContactLayout />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
}
