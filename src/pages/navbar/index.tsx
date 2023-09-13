import { Link } from "react-router-dom";
import { StyledNav } from "./styling";
import Logo from "../../assets/icons/Logo";

export default function Navbar() {
  return (
    <StyledNav className="flex justify-between py-[.8rem] px-[1.5rem]">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex gap-[30px]">
        <Link to="/about">
          <h2 className="text-[#222] font-semibold">about</h2>
        </Link>
        <Link to="/interest">
          <h2 className="text-[#222] font-semibold">interests</h2>
        </Link>
        <Link to="/contact">
          <h2 className="text-[#222] font-semibold">contact</h2>
        </Link>
        <Link to="/contact">
          <h2 className="text-[#222] font-semibold">Skills</h2>
        </Link>
      </div>
    </StyledNav>
  );
}
