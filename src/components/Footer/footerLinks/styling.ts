import { Link } from "react-router-dom";
import styled from "styled-components";
const mobileBreakpoint = "640px";
const tabletBreakpoint = "1024px";
const desktopBreakpoint = "1280px";

const mobileMediaQuery = `@media (max-width: ${mobileBreakpoint})`;
const tabletMediaQuery = `@media (max-width: ${tabletBreakpoint})`;
const desktopMediaQuery = `@media (max-width: ${desktopBreakpoint})`;

export const Wrapper = styled('div')`
// background: linear-gradient(0deg, rgba(0,0,0,1) 1%, rgba(23,23,110,0.9248949579831933) 59%);
background: rgb(0,51,81,.95);
// background: linear-gradient(97deg, rgba(0,51,81,1) 0%, rgba(0,168,194,1) 100%);
`
export const StyledFooter = styled('div')`
// background:#3b82f6;
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
    color :#f6af3b;
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

