import { Link } from "react-router-dom";
import { StyledNav } from "./styling";

export default function Navbar() {
  return (
    <StyledNav className="flex justify-between py-[.8rem] px-[1.5rem]">
      <div>
      <Link to={"/"}>
        <h1 className="text-[#DDD] font-bold" >S B P</h1>
      </Link>
      </div>
      <div className="flex gap-[30px] ">
      <Link to="#about">
        <h2 className="text-[#DDD] font-semibold ">about</h2>
      </Link>
      <Link to={"/interest"}>
        <h2 className="text-[#DDD] font-semibold ">interests</h2>
      </Link>
      <Link to={"/contact"}>
        <h2 className="text-[#DDD] font-semibold " >contact</h2>
      </Link>
      </div>
    </StyledNav>
  );
}
