import FacebookIcon from "../../assets/icons/FacebookIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedIn";
import TwitterIcon from "../../assets/icons/Twitter";
import YoutubeIcon from "../../assets/icons/youtube";
import Gmail from "../../assets/icons/Email";
import { StyledLogo } from "./styling";

export default function Contact() {
  return (
    <div className="m-[2rem]">
      <h1 className="text-center m-[2rem] text-[48px] font-semibold tracking-wide">Connect with me on </h1>
      <StyledLogo className="flex justify-around">
        <div>
          <FacebookIcon />
        </div>
        <div>
          <LinkedInIcon />
        </div>
        <div>
          <TwitterIcon />
        </div>
        <div>
          <YoutubeIcon />
        </div>
        <div> 
          <Gmail />
        </div>
      </StyledLogo>
    </div>
  );
}
