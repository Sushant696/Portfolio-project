import { StyledLinks, StyledFooter } from "./styling";
import { FooterForm } from "../footerForm";

export default function Footer() {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offset - 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-[#eee]">
        <StyledFooter>
          <FooterForm />
          <div className="flex gap-[5rem] my-[3rem] ">
            <div>
              <h1 className="font-bold">Quick Links</h1>
              <StyledLinks href="#">Home</StyledLinks>
              <StyledLinks
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </StyledLinks>
              <StyledLinks
                href="#interest"
                onClick={(e) => scrollToSection(e, "interest")}
              >
                My interests
              </StyledLinks>
              <StyledLinks>Blogs</StyledLinks>
            </div>
            <div>
              <h1 className="font-bold">Support</h1>
              <StyledLinks href="#">Terms of Sercives</StyledLinks>
              <StyledLinks href="#">Community Guidelines</StyledLinks>
              <StyledLinks href="#">Privacy Policy</StyledLinks>
            </div>
          </div>
        </StyledFooter>
        <div className="text-center p-[.5rem]">
          <h1>&copy; Sushant Babu Prasai | 2023 | All right reserved</h1>
        </div>
      </div>
    </>
  );
}