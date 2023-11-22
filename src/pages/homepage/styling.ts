import styled from "styled-components";
import Bgimage from "../../assets/Images/image.jpg";

export const Container = styled("div")`
  // background: url(${Bgimage}) center/cover;
  margin: 0.4rem;
  z-index: 1;
`;
export const StyledShowCase = styled("div")`
  max-width: 100%;
  height: 78vh;
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
  gap: 50px;
`;
export const Wrapper = styled("div")`
  padding: 2rem;
`;

export const StyledCard = styled("div")`
  display: flex;
  // box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: .6rem;
  max-width: 200px;
  // background:	#19486F;
  border-radius:12px;
  &:hover {
    transform: scale(1.07);
    transition :ease-in-out .33s;
    box-shadow: 0 0 10px #f6af3b;
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
