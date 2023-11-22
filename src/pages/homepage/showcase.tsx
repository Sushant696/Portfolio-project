// import FacebookIcon from "../../assets/icons/FacebookIcon";
// import { LinkedInIcon } from "../../assets/icons/LinkedIn";
// import TwitterIcon from "../../assets/icons/Twitter";
import Navbar from "../../components/navbar";
import Particle from "../../components/particles/particles";
import CoffeeCode from "./coffee";
import { StyledShowCase,StyledHeading, Container ,StyledSubHeading } from "./styling";
import { Typewriter } from "react-simple-typewriter";

export default function ShowCase() {
  return (
    <Container className="">
      <Navbar/>
      <StyledShowCase className="flex justify-center  items-center w-full">
        <div>
          <StyledHeading className="m-8 text-[#fff] font-bold">
            Hi🙌
          </StyledHeading>
          <StyledHeading className="m-8 text-[#fff] font-bold">
          I am Sushant Babu Prasai
          </StyledHeading>
          <StyledSubHeading className="m-8  font-bold text-[#fff]">
            A {" "}
            <span className="text-[#f6af3b]">
              <Typewriter
                words={[
                  " Student .",
                  "Tech Enthusiast . ",
                  " Developer .",
                  "UI/UX Designer .",
                ]}
                loop
                cursor
                cursorBlinking={false}
                cursorStyle=" | "
                typeSpeed={21}
                deleteSpeed={25}
                delaySpeed={1800}
              />
            </span>
          </StyledSubHeading>
          {/* <div className=" flex gap-[1rem] ml-8">
          <FacebookIcon height={30} width={30}/>
          <TwitterIcon height={30} width={30} color={'#fff'}/>
          <LinkedInIcon height={30} width={30} />
          </div> */}
          <br />
          <div className="items-center">
        <CoffeeCode/>
          </div>
        </div>
      </StyledShowCase>
      <Particle/>
    </Container>
  );
} 
