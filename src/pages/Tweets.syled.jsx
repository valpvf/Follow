import styled from "@emotion/styled";
import { BtnStyled } from "../conponents/Card/Card.styled";

export const SectionStyled = styled.section`
    width: 1236px;
    margin: 0 auto;
`
export const DropdownStyled = styled.form`
  position: fixed;
  display: inline-block;
  top: 50px;
  left: 50px;
  

  & CheckStyled:hover {
    background-color: #f1f1f1;
  }

  &:hover div {
    display: block;
  }

  &:hover button {
    background-color: #3e8e41;
  }
`;

export const CheckStyled = styled.button`
  
`

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

  & button {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  & button:hover {
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
  }
`;

export const BtnMoreStyled = styled(BtnStyled)`
display: block;
    margin: 48px auto;
`;