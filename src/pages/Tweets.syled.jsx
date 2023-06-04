import styled from "@emotion/styled";
import { BtnStyled } from "../conponents/Card/Card.styled";

export const SectionStyled = styled.section`
    width: 1236px;
    margin: 0 auto;
`
export const DropdownStyled = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;

  & a:hover {
    background-color: #f1f1f1;
  }

  &:hover div {
    display: block;
  }

  &:hover button {
    background-color: #3e8e41;
  }
`;

export const BtnDropStyled = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
`;

export const DropContentStyled = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & a:hover {
    background-color: #f1f1f1;
  }
`;

export const BtnMoreStyled = styled(BtnStyled)`
display: block;
    margin: 48px auto;
`;