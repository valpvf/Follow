import styled from "@emotion/styled";
import { BtnStyled } from "../conponents/Card/Card.styled";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export const WrapStyled = styled.div`
  padding: 15px;
`

export const SectionHomeStyled = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #766a92;
  color: #ebd8ff;
`;

export const ImgStyled = styled.img`
  width: 300px;
  margin: 0 auto;
`;

export const SectionStyled = styled.section`
  width: 1236px;
  margin: 0 auto;
`;

export const LinkStyled = styled(Link)`
  position: fixed;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #5736a3;
  font-size: 26px;
`;

export const GoHomeImgStyled = styled(AddHomeWorkIcon)`
  font-size: 56px;
  margin-right: 10px;
  /* text-decoration: none; */
  color: #5736a3;
`;

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

export const CheckStyled = styled.button``;

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

export const BoxStyled = styled(Box)`
  position: fixed;
  top: 150px;
  left: 15px;
  width: 200px;
`;
