import { Link } from "react-router-dom";
import Sushant from "../../assets/Images/sushant.jpg";
import { HomeWrapper } from "./styling";

export default function About() {
  return (
    <div className="my-16">
    <div className="flex justify-center">
      <HomeWrapper className="px-2 mx-2">
        <div className="h-full w-full p-3">
          <h1 className="text-[42px] text-[#111] font-semibold p-2">About me</h1>
          <h1 className="  text-[23px] text-[#111] leading-14 p-2 tracking-wide ">
            I'm passionate about web development and technology. With a knack
            for coding, I create user-friendly websites and digital experiences.
            My goal is to leverage technology to drive positive change and build
            impactful web applications. When not coding, I'm exploring the
            latest tech trends and sipping coffee, ready to bring your digital
            vision to life.
          </h1>
          <h1 className="tracking-wide text-[#111] text-[23px] leading-12 p-2 ">
          Let's work together to turn your digital vision into a reality. Feel free to reach out and let's chat about how we can collaborate on your next web endeavor.
          </h1>
        </div>
        <div className=" w-1/2 h-full">
          <img className="rounded-lg" src={`${Sushant}`} alt="myimg" />
        </div>
      </HomeWrapper>
    </div>
    <div className="text-center">
        <Link to={'/about'}>
          <button className="p-2 rounded-[8px] text-[#000] text-[18px] font-semibold bg-[#f6af3b]">Know More About Me</button>
        </Link>
    </div>
    </div>
  );
}
