import { StyledShowCase, StyledHeading, StyledImg } from "./styling";
export default function ShowCase() {
  return (
    <>
      <StyledShowCase className="flex justify-center items-center mb-[2rem]">
        <div>
          <StyledHeading>
            <h1 className="text-[64px] text-[#DDD] font-bold">Sushant Babu Prasai</h1>
          </StyledHeading>
          <br />
          <h1 className="font-semibold text-[#DDD] text-[36px] ">Student | Programmer | Learner | Dreamer</h1>
        </div>
        <StyledImg>{/* image goes here */}</StyledImg>
      </StyledShowCase>
    </>
  );
}
