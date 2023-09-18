import Footer from "../../components/Footer/footerLinks";
import Navbar from "../../components/navbar";
import ShowCase from "../homepage/showcase";
import About from "./index";

export default function Aboutlayout() {
  return (
    <div>
      <Navbar/>
      <ShowCase/>
      <About/>
      <Footer/>
    </div>
  )
}
