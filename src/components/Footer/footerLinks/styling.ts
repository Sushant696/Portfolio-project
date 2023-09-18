import { Link } from "react-router-dom";
import styled from "styled-components";
const mobileBreakpoint = "640px";
const tabletBreakpoint = "1024px";
const desktopBreakpoint = "1280px";

const mobileMediaQuery = `@media (max-width: ${mobileBreakpoint})`;
const tabletMediaQuery = `@media (max-width: ${tabletBreakpoint})`;
const desktopMediaQuery = `@media (max-width: ${desktopBreakpoint})`;

export const Wrapper = styled('div')`

`
export const StyledFooter = styled('div')`
background:#2f2e33;
padding:3rem;
${desktopMediaQuery} {
  }
${tabletMediaQuery} {
    // flex-wrap :wrap;
  }
${mobileMediaQuery} {
    // flex-wrap: no-wrap;
  }

`
export const StyledLinks = styled(Link)`
display:flex;
line-height:3rem;
font-size:24px;
cursor:pointer;
color :#FFF;
&:hover {
    color :#41b0bF;
    text-decoration :underline; 
}

${tabletMediaQuery} {
    flex-wrap :wrap;
  }
${mobileMediaQuery} {
    flex-wrap: wrap;
  }
`
export const StyledTextArea = styled("textarea")`
border:2px solid #737373 ;
width:100%;
border-radius :4px;
padding:1rem;
`
export const StyledLogo = styled("img")`
width:250px;
margin-bottom:1rem;
`

