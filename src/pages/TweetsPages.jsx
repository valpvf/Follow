import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";

import Card from "../conponents/Card/Card";
import {
  BoxStyled,
  BtnMoreStyled,
  GoHomeImgStyled,
  InputStyled,
  LinkStyled,
  MenuItemStyled,
  SectionStyled,
  SelectStyled,
  WrapStyled,
} from "./pages.syled";
import { selectorPart, selectorUsers } from "../redux/userSelector";
import { changePart } from "../redux/userSlice";

const Tweets = () => {
  const dispatch = useDispatch();
  const totalPart = useSelector(selectorUsers).length / 3;
  const part = useSelector(selectorPart);
  const [mark, setMark] = useState("");

  const handleClick = () => {
    dispatch(changePart(1));
    // page <= totalPage && dispatch(getUser(page));
  };

  const handleChange = (event) => {
    setMark(event.target.value);
  };

  return (
    <WrapStyled>
      <LinkStyled to="home">
        <GoHomeImgStyled />
        Back
      </LinkStyled>
      <BoxStyled>
        <FormControl fullWidth>
          <InputStyled id="demo-simple-select-label">
            Show tweets
          </InputStyled>
          <SelectStyled
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mark}
            label="show"
            onChange={handleChange}
          >
            <MenuItemStyled value={""}>all</MenuItemStyled>
            <MenuItemStyled value={false}>follow</MenuItemStyled>
            <MenuItemStyled value={true}>followings</MenuItemStyled>
          </SelectStyled>
        </FormControl>
      </BoxStyled>
      <SectionStyled>
        <Card mark={mark} />
        {Boolean(totalPart) && Math.floor(totalPart) - part >= 0 && (
          <BtnMoreStyled type="button" onClick={handleClick}>
            Load more
          </BtnMoreStyled>
        )}
      </SectionStyled>
    </WrapStyled>
  );
};

export default Tweets;
