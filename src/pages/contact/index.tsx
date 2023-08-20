import { Divider } from "antd";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedIn";
import TwitterIcon from "../../assets/icons/Twitter";
import YoutubeIcon from "../../assets/icons/youtube";
import { StyledLogos ,StyledLogo } from "./styling";


export default function Contact() {
  return (
    <div className="my-[4rem]">
      {/* <Divider/> */}
      <h1 className="text-center m-[2rem] text-[48px] font-semibold tracking-wide">Connect with me on </h1>
      <StyledLogos className="flex justify-center ">
        <StyledLogo>
          <FacebookIcon />
          <h1>Facebook</h1>
        </StyledLogo>
        <StyledLogo>
          <LinkedInIcon />
          <h1>LinkedIn</h1>
        </StyledLogo>
        <StyledLogo>
          <TwitterIcon />
          <h1>Twitter</h1>
        </StyledLogo>
        <StyledLogo>
          <YoutubeIcon />
          <h1>Youtube</h1>
        </StyledLogo>
      </StyledLogos>
    </div>
  );
}
