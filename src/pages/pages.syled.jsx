import styled from "@emotion/styled";
import { BtnStyled } from "../conponents/Card/Card.styled";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { MenuItem, Select } from "@mui/material";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";

import { Link } from "react-router-dom";

export const WrapStyled = styled.div`
  padding: 15px;
`;

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
  margin: 10px auto 50px;
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

export const LinkToTweetsStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  color: #004381;
  font-size: 24px;
`;

export const GoTweetsImgStyled = styled(FollowTheSignsIcon)`
  font-size: 48px;
  margin-left: 10px;
  /* text-decoration: none; */
  color: #004381;
`;
export const GoHomeImgStyled = styled(AddHomeWorkIcon)`
  font-size: 56px;
  margin-right: 10px;
  /* text-decoration: none; */
  color: #5736a3;
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

export const InputStyled = styled(InputLabel)`
  color: #5736a3;
  &[data-shrink="true"] {
    max-width: calc(133% - 48px);
    transform: translate(14px, -19px) scale(0.75);
  }
`;

export const SelectStyled = styled(Select)`
  background-color: #ebd8ff;
`;

export const MenuItemStyled = styled(MenuItem)`
  color: #5736a3;
`;

export const Header1Styled = styled.h1`
  width: 500px;
  margin: 0 auto;
  font-size: 36px;
`;

export const Header2Styled = styled.h2`
  width: 500px;
  margin: 40px auto;
  font-size: 30px;
`;
