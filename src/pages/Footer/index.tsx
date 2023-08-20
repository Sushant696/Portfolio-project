import { Input } from "antd";
import { StyledLinks,StyledFooter } from "./styling";
export default function () {
  return (
    <>
      <div className="bg-[#eee]">
        <StyledFooter>
          <div className=" my-[3rem]">
            <div>
            <h1>LOGO</h1>
            </div>
            <h1 className="leading-[3rem]">Send me a messsage </h1>
            <input
              className="p-[1.5rem] w-[25rem] h-[6rem] my-4"
              placeholder="A message for me"
            />
          </div>
          <div className="flex gap-[5rem] justify-between my-[3rem] ">
            <div>
              <h1 className="font-bold">Quick Links</h1>
              <StyledLinks href="#">Home</StyledLinks>
              <StyledLinks href="#about">About</StyledLinks>
              <StyledLinks href="#interest">My interests</StyledLinks>
              <StyledLinks>Blogs</StyledLinks>
            </div>
            <div>
              <h1 className="font-bold">Support</h1>
              <StyledLinks href="#">Terms of Sercives</StyledLinks>
              <StyledLinks href="#">Community Guidelines</StyledLinks>
              <StyledLinks href="#">Privacy Policy</StyledLinks>
            </div>
          </div>
        </StyledFooter>
        <div className="text-center p-[2rem]">
          <h1>&copy; Sushant Babu Prasai | 2023 | All right reserved</h1>
        </div>
      </div>
    </>
  );
}
