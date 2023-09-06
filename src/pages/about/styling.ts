import styled from "styled-components";

export const HomePageWrapper = styled("div")`
  max-width: 1400px;
  margin: 0 auto;
`;

export const HomeWrapper = styled("div")`
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const SushantImg = styled("div")`
  flex: 1;
  @media (max-width: 1124px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledImg = styled("img")`
  width: 550px;
  height: 520px;
  border-radius: 18px;
`;

export const StyledContent = styled("div")`
  text-align: left;
  
  flex: 1.2;
`;

export const StyledHeading = styled("h1")`
  font-size: 48px;

  @media (max-width: 1400px) {
    font-size: 36px;
    text-align:center;
  }
`;
export const StyledSubHeading = styled("h1")`
  font-size: 23px;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;
