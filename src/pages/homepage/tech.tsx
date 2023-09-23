import { StyledCard, Wrapper } from "./styling";
import Html from "../../assets/Images/html.png";
import css from "../../assets/Images/css.png";
import github from "../../assets/Images/github.png";
import js from "../../assets/Images/js.png";
import react from "../../assets/Images/react.png";
import { Progress } from "antd";

export default function Tech() {
  return (
    <Wrapper className=" mx-1">
      <h1 className="text-center text-[#fff]  text-[36px] py-12  font-semibold">
        My Profeciency
      </h1>
      <div className=" p-2  flex justify-center gap-[4rem]">
        <StyledCard>
          <img alt="Html" className=" m-2 w-[70%]" src={`${Html}`} />
          <h1 className="text-[24px] text-[#111]">Html</h1>
          <Progress className="" strokeColor={"#f6af3b"}  percent={70} status="active" />
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[70%]" src={`${css}`} />
          <h1 className="text-[24px] text-[#111]" >Css</h1>
          <Progress percent={60} status="active" strokeColor={"#f6af3b"} />
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 w-[70%]" src={`${js}`} />
          <h1 className="text-[24px] text-[#111] " >JavaScript</h1>
          <Progress percent={80} strokeColor={"#f6af3b"} status="active" />
        </StyledCard>
        <StyledCard>
          <img alt="Html" className="m-2 bg-[#111] w-[70%]" src={`${github}`} />
          <h1 className="text-[24px] text-[#111] " >GitHub </h1>
          <Progress  strokeColor={"#f6af3b"} percent={70} status="active" />
        </StyledCard>
        <StyledCard>
          <img alt="Html"  className="m-2 w-[70%]" src={`${react}`} />
          <h1 className="text-[24px] text-[#111] " >React</h1>
          <Progress  strokeColor={"#f6af3b"} percent={40} status="active" />
        </StyledCard>
      </div>
    </Wrapper>
  );
}
