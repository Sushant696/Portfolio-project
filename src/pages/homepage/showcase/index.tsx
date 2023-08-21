import { StyledShowCase, StyledHeading ,StyledSubHeading } from "./styling";
export default function ShowCase() {
  return (
    <>
      <StyledShowCase className="flex justify-center items-center mb-[2rem]">
        <div>
          <StyledHeading  className=" text-[#DDD] font-bold" >
            Sushant Babu Prasai
          </StyledHeading>
          <br />
          <StyledSubHeading className="font-semibold text-[#DDD] ">Student | Programmer | Learner | Dreamer</StyledSubHeading>
        </div>
      </StyledShowCase>
    </>
  );
}
