import Navbar from "../pages/navbar"
import ShowCase from "../pages/homepage/showcase"
import Interest from "../pages/interest/index."
import About from "../pages/about"
import { Divider } from "antd"
import Contact from "../pages/contact"
import Footer from "../pages/Footer"
import Quotes from "../pages/quotes"
export default function Home() {
  return (
    <div className="m-2" >
      <Navbar />
      <ShowCase/>
      <About/>
      <Quotes/>
      <Divider/>
      <Interest/>
      <Contact/>
      <Footer/>
    </div>
  )
}
