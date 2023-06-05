// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../conponents/Card/Card";
import {
  BoxStyled,
  BtnMoreStyled,
  GoHomeImgStyled,
  LinkStyled,
  SectionStyled,
  WrapStyled,
} from "./pages.syled";
import { selectorPart, selectorUsers } from "../redux/userSelector";
import { changePart } from "../redux/userSlice";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select } from "@mui/material";
import { useState } from "react";

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
        Go Home
      </LinkStyled>
      {/* <DropdownStyled>
        <BtnDropStyled>Show</BtnDropStyled>
        <DropContentStyled>
          <CheckStyled type="radio">all</CheckStyled>
          <CheckStyled type="radio">follow</CheckStyled>
          <CheckStyled type="radio">followings</CheckStyled>
        </DropContentStyled>
      </DropdownStyled> */}
      <BoxStyled>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Show tweets
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mark}
            label="show"
            onChange={handleChange}
          >
            <MenuItem value={''}>all</MenuItem>
            <MenuItem value={false}>follow</MenuItem>
            <MenuItem value={true}>followings</MenuItem>
          </Select>
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
