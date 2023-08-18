import Navbar from "../pages/navbar"
import ShowCase from "../pages/homepage/showcase"
import Interest from "../pages/interest/index."
import About from "../pages/about"
import { Divider } from "antd"
import Contact from "../pages/contact"
export default function Home() {
  return (
    <div className="m-2" >
      <Navbar />
      <ShowCase/>
      <About/>
      <Divider/>
      <Interest/>
      <Contact/>
    </div>
  )
}
