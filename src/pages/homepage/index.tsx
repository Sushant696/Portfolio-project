import { Divider } from "antd";
import About from "./about";
import ShowCase from "./showcase";
import Tech from "./tech";

export default function Homepage() {
  return (
    <div>
        <ShowCase/>
        <About/>
        <Divider/>
        <Tech/>
    </div>
  )
}
