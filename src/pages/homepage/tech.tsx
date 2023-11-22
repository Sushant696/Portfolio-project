import { StyledCard, Wrapper } from "./styling";
import Html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
// import github from "../../assets/Images/github.png";
import js from "../../assets/Images/js.png";
import react from "../../assets/Images/react.png";
import python from "../../assets/Images/python.png";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Tech() {
  return (
    <Wrapper className=" mx-1 ">
      <h1 className="text-center text-[#fff]  text-[36px] py-12  font-semibold">
        My Profeciencies
      </h1>
      <div className=" p-2 flex  justify-center flex-wrap gap-16">
        <StyledCard>
          <img alt="Html" className=" m-2 w-[80%]" src={`${Html}`} />
          <h1 className="text-[24px] text-[#fff]">Html</h1>
          <ProgressBar
            completed={80}
            bgColor="#f6af3b"
            className="w-full"
            maxCompleted={100}
          />
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[80%]" src={`${css}`} />
          <h1 className="text-[24px] text-[#fff]">Css</h1>
          <ProgressBar
            completed={40}
            bgColor="#f6af3b"
            className="w-full"
            maxCompleted={100}
          />
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[80%]" src={`${js}`} />
          <h1 className="text-[24px] text-[#fff] ">JavaScript</h1>
          <ProgressBar
            completed={70}
            bgColor="#f6af3b"
            className="w-full"
            maxCompleted={100}
          />
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[80%]" src={`${react}`} />
          <h1 className="text-[24px] text-[#fff] ">React</h1>
          <ProgressBar
            completed={30}
            bgColor="#f6af3b"
            className="w-full"
            maxCompleted={100}
          />
        </StyledCard>
        <StyledCard>
          <img alt="python" className="m-2 w-[80%]" src={`${python}`} />
          <h1 className="text-[24px] text-[#fff] ">Python</h1>
          <ProgressBar
            completed={20}
            bgColor="#f6af3b"
            className="w-full"
            maxCompleted={90}
          />
        </StyledCard>
      </div>
    </Wrapper>
  );
}
