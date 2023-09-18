import { StyledCard, Wrapper } from "./styling";
import Html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
import github from "../../assets/Images/github.png";
import js from "../../assets/Images/js.png";
import react from "../../assets/Images/react.png";
export default function Tech() {
  return (
    <Wrapper className=" mx-1">
      <h1 className="text-center text-[36px] text-[#000] font-semibold">
        My Profeciency
      </h1>
      <div className="m-2 p-2  flex justify-around gap-[]">
        <StyledCard>
          <img alt="Html" className=" m-2 w-[70%]" src={`${Html}`} />
          <h1 className="text-center">Html</h1>
          <h2>Progress bar </h2>
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[70%]" src={`${css}`} />
          <h1>Css</h1>
          <h2>Progress bar </h2>
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[70%]" src={`${js}`} />
          <h1>JavaScript</h1>
          <h2>Progress bar </h2>
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 bg-[#111] w-[70%]" src={`${github}`} />
          <h1>GitHub </h1>
          <h2>Progress bar </h2>
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[70%]" src={`${react}`} />
          <h1>React</h1>
          <h2>Progress bar </h2>

        </StyledCard>
      </div>
    </Wrapper>
  );
}
