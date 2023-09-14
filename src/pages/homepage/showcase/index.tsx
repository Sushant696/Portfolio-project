import { StyledShowCase, StyledHeading ,StyledSubHeading  } from "./styling";
import { Typewriter } from "react-simple-typewriter";
export default function ShowCase() {
  return (
    <>
      <StyledShowCase className="flex justify-center items-center mb-[2rem]">
        <div>
          <StyledHeading  className=" text-[#fff] font-bold" >
            Sushant Babu Prasai
          </StyledHeading>
          <StyledSubHeading className="m-6  text-center font-bold text-[#fff]">
            I am {" "}
            <span  className="text-[#f00]">
            <Typewriter 
            words={["a Student ","Tech Enthusiast "," a Developer ","UI/UX Designer "]}
            loop
            cursor
            cursorBlinking ={false}
            cursorStyle=" | "
            typeSpeed={18}
            deleteSpeed={27}
            delaySpeed={1800}
            />
            </span>
          </StyledSubHeading>
          <br />
        </div>
      </StyledShowCase>
    </>
  );
}
