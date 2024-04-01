import { StyledLinks, StyledFooter, Wrapper } from "./styling";
import Logo from "../../../assets/icons/Logo";
import { Divider } from "antd";
import { FacebookOutlined, GithubOutlined, LinkedinOutlined,  TwitterOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <Wrapper className="flex flex-col mx-1 p-[5rem]"> {/* bg-[#3b82f6]*/}
        <div className="">
          <StyledFooter>
            <div className="flex justify-around">
              <div className="mb-[1rem]">
                <a href="#">
                  <Logo />
                </a>
              </div>
              <div>
                <StyledLinks to="/">Home</StyledLinks>
                <StyledLinks to="#about">About</StyledLinks>
                <StyledLinks to="">Skills</StyledLinks>
              </div>
              <div>
                {/* <h1 className="font-bold text-[#fff]">Quick Links</h1> */}
                <StyledLinks to="/blogs">Blogs</StyledLinks>
                <StyledLinks to="/passion">Passion</StyledLinks>
                <StyledLinks to="/contact">Contact</StyledLinks>
              </div>

              <div>
                {/* <h1 className="font-bold text-[#fff]">Support</h1> */}
                <StyledLinks to="#">Terms of Sercives</StyledLinks>
                <StyledLinks to="#">Community Guidelines</StyledLinks>
                <StyledLinks to="#">Privacy Policy</StyledLinks>
              </div>
            </div>
            <Divider className="bg-[#eee]" />
          </StyledFooter>
          <div className=" flex flex-col text-center text-[#fff] p-[.5rem]">
            <div className="flex justify-center m-4 gap-8">
              <FacebookOutlined
                style={{
                  fontSize: "40px",
                }}
              />
              <TwitterOutlined  style={{
                fontSize: "40px",
              }}/>
                <GithubOutlined  style={{
                  fontSize: "40px",
                }}/>
                <LinkedinOutlined style={{
                     fontSize: "40px",
                   }}/>
            </div>
            <h1>&copy; Copyright | 2024 | All right reserved</h1>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

// const scrollToSection = (
//   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
//   sectionId: string
// ) => {
//   event.preventDefault();

//   const section = document.getElementById(sectionId);
//   if (section) {
//     const offset = section.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({ top: offset - 0, behavior: "smooth" });
//   }
// };
