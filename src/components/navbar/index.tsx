import { Link } from "react-router-dom";
import { StyledNav} from "./styling";
import Logo from "../../assets/icons/Logo";

export default function Navbar() {
  return (
    <StyledNav className="flex justify-between items-center z-0  px-[.5rem]">
      <div>
        <Link className="" to="/">
          <Logo /> 
        </Link>
      </div>
      <div className="flex gap-[30px]">
        <Link to="/about">
          <h2 className="text-[#fff] text-[22px] font-semibold">About</h2>
        </Link>
        <Link to="/interest">
          <h2 className="text-[#fff] text-[22px] font-semibold">Interests</h2>
        </Link>
        <Link to="/skills">
          <h2 className="text-[#fff] text-[22px] font-semibold">Skills</h2>
        </Link>
        {/* <Link to="/passion">
          <h2 className="text-[#fff] font-semibold text-[22px]">Passion</h2>
        </Link> */}
        <Link to="/contact">
          <h2 className="text-[#fff] text-[22px] font-semibold">Contact</h2>
        </Link>
      </div>
    </StyledNav>
  );
}
