import ShowCase from "./showcase";
import Tech from "./tech";
import Footer from "../../components/Footer/footerLinks";
import CoffeeCode from "./coffee";
import About from "./about";
export default function Homepage() {
  return (
    <div>
        <ShowCase/>
        <About/>
        <CoffeeCode/>
        <Tech/>
        <Footer/>
    </div>
  )
}
