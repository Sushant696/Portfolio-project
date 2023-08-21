import { Card } from "antd";
import styled from "styled-components";

export const InterestContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

export const InterestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
  justify-items: center;
  margin: 0 auto;
  max-width: 1024px;
  @media (max-width: 1226px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledCard = styled(Card)`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 1rem;
  margin:1rem;
  max-width: 480px;
  width: 100%;
  text-align: left;
`;
export const StyledHr = styled("hr")`
  width: 130px;
  height: 6px;
  background-color: #41b0bf;
`;
