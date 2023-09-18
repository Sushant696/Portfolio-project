import { Divider } from "antd";
import About from "./about";
import ShowCase from "./showcase";
import Tech from "./tech";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer/footerLinks";
export default function Homepage() {
  return (
    <div>
       <Navbar/>
        <ShowCase/>
        <About/>
        <Divider/>
        <Tech/>
        <Footer/>
    </div>
  )
}
