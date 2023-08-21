
import styled from "styled-components";

export const StyledFooter = styled('div')`
display:flex;
justify-content :space-between;
background:#eee;
padding:3rem;
flex-wrap:wrap;
`
export const StyledLinks = styled("a")`
display:block;
line-height:3rem;
font-size:24px;
cursor:pointer;

&:hover {
    color :#41b0bF;
    text-decoration :underline; 
}
`
export const StyledInput = styled("input")`
border:2px solid #737373 ;
min-height:4rem;
padding:1rem;
min-width:16rem;
`

