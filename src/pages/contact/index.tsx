import FacebookIcon from "../../assets/icons/FacebookIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedIn";
import TwitterIcon from "../../assets/icons/Twitter";
import YoutubeIcon from "../../assets/icons/youtube";
import { StyledLogos ,StyledLogo } from "./styling";


export default function Contact() {
  return (
    <div className="my-[4rem]" id="contact">
      {/* <Divider/> */}
      <h1 className="text-center m-[2rem] text-[48px] font-semibold tracking-wide">Connect with me on </h1>
      <StyledLogos className="flex justify-center ">
        <StyledLogo>
          <FacebookIcon />
          <a href="https://www.facebook.com">
            <h1 className="hover:text-[#41b0bf]" >Facebook</h1>
            </a>
        </StyledLogo>
        <StyledLogo>
          <LinkedInIcon />
          <a href="https://www.linkedin.com">
            <h1 className="hover:text-[#41b0bf]">LinkedIn</h1>
            </a>
        </StyledLogo>
        <StyledLogo>
          <TwitterIcon />
          <a href="https://www.twitter.com">
            <h1 className="hover:text-[#41b0bf]">Twitter</h1>
            </a>
        </StyledLogo>
        <StyledLogo>
          <YoutubeIcon />
          <a href="https://www.youtube.com">
            <h1 className="hover:text-[#41b0bf]">Youtube</h1>
            </a>
        </StyledLogo>
      </StyledLogos>
    </div>
  );
}
