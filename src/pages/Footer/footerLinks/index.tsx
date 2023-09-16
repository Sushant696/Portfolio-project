import { StyledLinks, StyledFooter } from "./styling";
import Logo from "../../../assets/icons/Logo";
import { Divider } from "antd";
import FacebookIcon from "../../../assets/icons/FacebookIcon";
import TwitterIcon from "../../../assets/icons/Twitter";
import { LinkedInIcon } from "../../../assets/icons/LinkedIn";

export default function Footer() {
  return (
    <>
      <div className="bg-[#2f2e33]">
        <StyledFooter>
          <div className="flex justify-around">
            <div className="mb-[1rem]">
              <a href="#">
                <Logo />
              </a>
            </div>
            <div>
              {/* <h1 className="font-bold text-[#fff]">Quick Links</h1> */}
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
          <Divider className="bg-[#eee]"/>
        </StyledFooter>
        <div className=" flex flex-col text-center text-[#fff] p-[.5rem]">
          <div className="flex justify-center m-4 gap-8"> 
            <FacebookIcon height = {40} width = {50}/>
            <TwitterIcon height = {40} width = {50} />
            <LinkedInIcon height = {40} width = {50} />
          </div>
          <h1>&copy; Sushant Babu Prasai | 2023 | All right reserved</h1>
        </div>
      </div>
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
