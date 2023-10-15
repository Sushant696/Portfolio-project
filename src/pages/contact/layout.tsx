import Contact from ".";
import Footer from "../../components/Footer/footerLinks";
import ShowCase from "../homepage/showcase";

export default function ContactLayout() {
  return (
    <div>
      <ShowCase/>
      <Contact/>
      <Footer/>
    </div>
  )
}
