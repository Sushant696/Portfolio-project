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
          <br />
        </div>
      </StyledShowCase>
    </Container>
  );
}
