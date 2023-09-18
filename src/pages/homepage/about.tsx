import { Link } from "react-router-dom";
import Sushant from "../../assets/Images/sushant.jpg";
import { HomeWrapper } from "./styling";

export default function About() {
  return (
    <>
    <div className="flex justify-center">
      <HomeWrapper className="px-2 mx-2">
        <div className="h-full w-full p-3">
          <h1 className="text-[42px] font-semibold p-2">About me</h1>
          <h1 className="  text-[23px] leading-12 p-2 tracking-wide ">
            I'm passionate about web development and technology. With a knack
            for coding, I create user-friendly websites and digital experiences.
            My goal is to leverage technology to drive positive change and build
            impactful web applications. When not coding, I'm exploring the
            latest tech trends and sipping coffee, ready to bring your digital
            vision to life.
          </h1>
          <h1 className="tracking-wide  text-[23px] leading-12 p-2 ">
          Let's work together to turn your digital vision into a reality. Feel free to reach out and let's chat about how we can collaborate on your next web endeavor.
          </h1>
        </div>
        <div className=" w-1/2 h-full">
          <img className="rounded-lg" src={`${Sushant}`} alt="myimg" />
        </div>
      </HomeWrapper>
    </div>
    <div className="text-center m-4 ">
        <Link to={'/about'}>
          <button className="p-2 rounded-[8px] text-[#FFF] text-[18px] font-semibold bg-[#ff8d3f]">Know More About Me</button>
        </Link>
    </div>
    </>
  );
}
