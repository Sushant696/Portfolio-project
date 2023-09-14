import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled("div")`
background :#111;
overfolw-y:;scroll;
scroll-behaviour :smooth;
`
export const StyledLink = styled(Link)`
&:hover {
    border-bottom:#fff solid 3px;
    }
`