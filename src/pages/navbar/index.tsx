import { Link } from "react-router-dom";
import { StyledNav,StyledLink } from "./styling";
import Logo from "../../assets/icons/Logo";

export default function Navbar() {
  return (
    <StyledNav className="flex flex-col items-center py-[.8rem] px-[1.5rem]">

      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex gap-[30px]">
        <StyledLink to="/about">
          <h2 className="text-[#fff] text-[22px] font-semibold">about</h2>
        </StyledLink>
        <StyledLink to="/interest">
          <h2 className="text-[#fff] text-[22px] font-semibold">interests</h2>
        </StyledLink>
        <StyledLink to="/contact">
          <h2 className="text-[#fff] text-[22px] font-semibold">contact</h2>
        </StyledLink>
        <StyledLink to="/contact">
          <h2 className="text-[#fff] text-[22px] font-semibold">Skills</h2>
        </StyledLink>
        <StyledLink to="/passion">
          <h2 className="text-[#fff] font-semibold text-[22px]">passion</h2>
        </StyledLink>
      </div>
    </StyledNav>
  );
}
