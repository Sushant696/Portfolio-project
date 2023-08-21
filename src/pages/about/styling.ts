import styled from "styled-components";

export const HomePageWrapper = styled("div")`
  max-width: 1500px;
  margin: 0 auto;
`;

export const HomeWrapper = styled("div")`
  display: flex;
  align-items: center;
  width:1200px;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const SushantImg = styled("div")`
  flex: 1;
  padding: 3rem;
  
  @media (max-width: 1024px) {
    display:flex;
    justify-content :center;
  }
`;
export const StyledImg = styled("img")`
  background: url("/src/assets/Images/sushant.jpg") center/cover;
  width:560px;
  height :500px;
  border-radius: 18px;

`;

export const StyledContent = styled("div")`
  flex: 1.5;
`;
export const StyledHeading = styled("h1")`
  font-size: 48px;

  @media (max-width: 1400px) {
    font-size: 36px;
  }
`;
export const StyledSubHeading = styled("h1")`
  font-size: 22px;

  @media (max-width: 1400px) {
    font-size: 20px;
  }
`;