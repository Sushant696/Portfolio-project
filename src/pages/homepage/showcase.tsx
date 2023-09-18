import Navbar from "../../components/navbar";
import { StyledShowCase,StyledHeading, Container ,StyledSubHeading } from "./styling";
import { Typewriter } from "react-simple-typewriter";


export default function ShowCase() {
  return (
    <Container>
      <Navbar/>
      <StyledShowCase className="flex justify-start items-center ">
        <div>
          <StyledHeading className="m-8 text-[#fff] font-bold">
            Sushant Babu Prasai
          </StyledHeading>
          <StyledSubHeading className="m-8  font-bold text-[#fff]">
            I am{" "}
            <span className="text-[#f6af3b]">
              <Typewriter
                words={[
                  "a Student .",
                  "Tech Enthusiast . ",
                  " a Developer .",
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
          <br />
        </div>
      </StyledShowCase>
    </Container>
  );
}
