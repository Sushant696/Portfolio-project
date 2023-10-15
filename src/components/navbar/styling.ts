import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled("div")`
// background :#2f2e33;
overfolw-y:;scroll;
scroll-behaviour :smooth;
`
export const StyledLink = styled(Link)`
position: relative;
      display: block;
      text-transform: uppercase;
      margin: 20px 0;
      padding: 10px 20px;
      text-decoration: none;
      color: #262626;
      font-family: sans-serif;
      font-size: 18px;
      font-weight: 600;
      transition: .5s;
      z-index: 1;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top: 2px solid #f6af3b;
        border-bottom: 2px solid #f6af3b;
        transform: scaleY(2);
        opacity: 0;
        transition: .3s;
      }
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #111;
        transform: scale(0);
        opacity: 0;
        transition: .5s;
        z-index: -1;
      }
      &:hover {
        color: #123;
        &:before {
          transform: scaleY(1);
          opacity: 1;
        }
        &:after {
          transform: scaleY(1);
          opacity: 1;
        }
      }
    }
`
// along with that we can use coblalt #3a5199 white #ffffff and coolgray #d5d6d2

