import About from "./about";
import ShowCase from "./showcase";
import Tech from "./tech";
import Footer from "../../components/Footer/footerLinks";
export default function Homepage() {
  return (
    <div>
        <ShowCase/>
        <About/>
        {/* <Divider/> */}
        <Tech/>
        <Footer/>
    </div>
  )
}
