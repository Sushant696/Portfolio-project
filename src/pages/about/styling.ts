import styled from "styled-components";

export const HomePageWrapper = styled("div")`
  max-width: 1500px;
  margin: 0 auto;
`;

export const HomeWrapper = styled("div")`
  display: flex;
  align-items: center;
  @media(max-width : 1236px) {
    display:block;
  }
`;

export const SushantImg = styled("div")`
flex: 1;
padding:3rem;
`;
export const StyledImg = styled("img")`
  max-width: 95%;
  border-radius: 18px;
`;


export const StyledContent = styled("div")`
  flex: 1;
`;
export const StyledHeading = styled("h1")`
  font-size:56px;

@media(max-width : 1400px) {
  font-size:36px;
}
`;
export const StyledSubHeading = styled("h1")`
  font-size:26px;

@media(max-width : 1400px) {
  font-size:24px;
}


`;


// media for image and content + heading font media 
