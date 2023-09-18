import { Link } from "react-router-dom";
import { StyledNav,StyledLink } from "./styling";
import Logo from "../../assets/icons/Logo";

export default function Navbar() {
  return (
    <StyledNav className="flex justify-between items-center z-0  px-[1rem]">
      <div>
        <Link className="" to="/">
          <Logo /> 
        </Link>
      </div>
      <div className="flex gap-[20px]">
        <StyledLink to="/about">
          <h2 className="text-[#fff] text-[18px] font-semibold">About</h2>
        </StyledLink>
        <StyledLink to="/interest">
          <h2 className="text-[#fff] text-[18px] font-semibold">Interests</h2>
        </StyledLink>
        <StyledLink to="/contact">
          <h2 className="text-[#fff] text-[18px] font-semibold">Skills</h2>
        </StyledLink>
        <StyledLink to="/passion">
          <h2 className="text-[#fff] font-semibold text-[18px]">Passion</h2>
        </StyledLink>
        <StyledLink to="/contact">
          <h2 className="text-[#fff] text-[18px] font-semibold">Contact</h2>
        </StyledLink>
      </div>
    </StyledNav>
  );
}
