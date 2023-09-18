import styled from "styled-components";

export const StyledShowCase = styled("div")`
  max-width: 100%;
  background: #2f2e33;
  height: 50vh;
  box-sizing: border-box;
  z-index: 1;
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
`;

export const StyledCard = styled("div")`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  color: #111;
  max-width: 180px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  &:hover {
    
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

// ul li a:hover::before {
//   transform: scale(1.1);
//   box-shadow: 0 0 15px #ffee10;
// }

// ul li a:hover {
//   color: #ffee10;
//   box-shadow: 0 0 5px #ffee10;
//   text-shadow: 0 0 5px #ffee10;
// }