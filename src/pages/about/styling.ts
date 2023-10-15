import styled from "styled-components";
const mobileBreakpoint = "640px";
const tabletBreakpoint = "1024px";
const desktopBreakpoint = "1280px";

const mobileMediaQuery = `@media (max-width: ${mobileBreakpoint})`;
const tabletMediaQuery = `@media (max-width: ${tabletBreakpoint})`;
const desktopMediaQuery = `@media (max-width: ${desktopBreakpoint})`;

export const HomeWrapper = styled("div")`
max-width: 1300px;
margin: 0 auto;
gap:30px;
${desktopMediaQuery} {
    display: flex;
    flex-direction :column-reverse;
    align-items:center;
    gap:5px;
`;

export const SushantImg = styled("div")`
  flex: 1;
  ${desktopMediaQuery} {
    display: flex;
    justify-content: center;
    margin-top:2rem;
    max-width:900px; 
  }
  `;
  
  export const StyledImg = styled("img")`
  border-radius: 15px;
  width:100%;
  ${desktopMediaQuery} {
    width:70%; 
    border-radius:15px;
    display:flex;
  }
`;

export const StyledContent = styled("div")`
  text-align: left;
  flex: 1.2;
`;
export const StyledHeading = styled("h1")`
  font-size: 46px;
  padding-left:1rem;
  text-align:left;
  ${desktopMediaQuery} {
    font-size: 36px;
    text-align:center;
  }
  ${tabletMediaQuery} {
    font-size: 36px;
    text-align:center;
  }
  ${mobileMediaQuery} {
    font-size: 36px;
    text-align:center;
  }
`;
export const StyledSubHeading = styled("h1")`
  font-size: 22px;
  padding:1rem;
  ${desktopMediaQuery} {
    font-size: 20px;
    padding:1rem;
  }
`;
