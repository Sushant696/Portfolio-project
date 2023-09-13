import { StyledShowCase, StyledHeading ,StyledSubHeading  } from "./styling";
import { Typewriter, Cursor } from "react-simple-typewriter";
export default function ShowCase() {
  return (
    <>
      <StyledShowCase className="flex justify-center items-center mb-[2rem]">
        <div>
          <StyledHeading  className=" text-[#111] font-bold" >
            Sushant Babu Prasai
          </StyledHeading>
          <StyledSubHeading className="m-6  text-center font-bold text-[#111]">
            I am {" "}
            <Typewriter 
            words={["Student.","  Developer.","Tech Enthusiast.","UI/UX Designer."]}
            loop
            typeSpeed={120}
            deleteSpeed={90}
            delaySpeed={800}
            />
            <Cursor  />
          </StyledSubHeading>
          <br />
        </div>
      </StyledShowCase>
    </>
  );
}
