import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled('div')`
display:flex;
justify-content :space-between;
background:#eee;
padding:3rem;
flex-wrap:wrap;
`
export const StyledLinks = styled(Link)`
display:block;
line-height:3rem;
font-size:24px;
cursor:pointer;

&:hover {
    color :#41b0bF;
    text-decoration :underline; 
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

export const StyledInput = styled("input")`
border:2px solid #737373 ;
border-radius :4px;
width:100%;
padding:.5rem;
`
export const StyledButton = styled("button")`
width:100%;
padding:.5rem;
margin-top:1rem;
border:2px solid #737373;
border-radius :8px;
font-size:22px;
&: hover {
    background :#41b0bf;
    transition :ease-in-out .6s;
}
` 