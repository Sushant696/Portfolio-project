import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './styling';

export default function Navbar() {
  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset - 0, behavior: 'smooth' });
    }
  };

  return (
    <StyledNav className="flex justify-between py-[.8rem] px-[1.5rem]">
      <div>
        <Link to="/">
          <h1 className="text-[#DDD] font-bold">S B P</h1>
        </Link>
      </div>
      <div className="flex gap-[30px]">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
          <h2 className="text-[#DDD] font-semibold">about</h2>
        </a>
        <a href="#interest" onClick={(e) => scrollToSection(e, 'interest')}>
          <h2 className="text-[#DDD] font-semibold">interests</h2>
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
          <h2 className="text-[#DDD] font-semibold">contact</h2>
        </a>
      </div>
    </StyledNav>
  );
}
