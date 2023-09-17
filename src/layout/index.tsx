import Navbar from "../pages/navbar"
// import Interest from "../pages/interest/index."
import { Divider } from "antd"
// import Contact from "../pages/contact"
import Footer from "../pages/Footer/footerLinks"
import Homepage from "../pages/homepage"
// import Quotes from "../pages/quotes"
export default function Home() {
  return (
    <div className="m-2" >
      <Navbar />
       <Homepage/>
      {/* <Quotes/> */}
      <Divider/>
      {/* <Interest/> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  )
}
