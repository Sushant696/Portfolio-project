import styled from "styled-components";
import Bgimage from "../../assets/Images/image.jpg"


export const Container = styled("div")`
background: url(${Bgimage}) center/cover;
z-index:10;
`;
export const StyledShowCase = styled("div")`
max-width: 100%;
height :75vh;
box-sizing: border-box;
`;

export const StyledHeading = styled("h1")`
  font-size: 64px;
  @media (max-width: 768px) {
    font-size: 42px;
  }
`;
export const StyledSubHeading = styled("h1")`
  font-size: 46px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const HomeWrapper = styled("div")`
  max-width: 1100px;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`;
export const Wrapper = styled("div")`
background: rgb(0,51,81);
background: linear-gradient(97deg, rgba(0,51,81,1) 0%, rgba(0,168,194,1) 100%);
`;

export const StyledCard = styled("div")`
  display: flex;
  background:#FFF;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  padding:1rem;
  max-width: 190px;
  border-radius: 10px;
  &:hover {
    transform: scale(1.07);
    box-shadow: 0 0 8px #ffee10;
  }
`;


// ul li a::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border-radius: 50%;
//   background: #ffee10;
//   transition: .5s;
//   transform: scale(.9);
//   z-index: -1;
// }


// ul li a:hover {
//   color: #ffee10;
//   box-shadow: 0 0 5px #ffee10;
//   text-shadow: 0 0 5px #ffee10;
// }