import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../conponents/Card/Card";
import { getUser } from "../redux/userOperations";
import {
  BtnDropStyled,
  BtnMoreStyled,
  CheckStyled,
  DropContentStyled,
  DropdownStyled,
  SectionStyled,
} from "./Tweets.syled";
import { selectorPart, selectorUsers } from "../redux/userSelector";
import { changePart } from "../redux/userSlice";

const Tweets = () => {
  const dispatch = useDispatch();
  const totalPart = useSelector(selectorUsers).length / 3;
  const part = useSelector(selectorPart);

  const [page, setPage] = useState(1);

  const handleClick = () => {
    dispatch(changePart(1));
    // page <= totalPage && dispatch(getUser(page));
  };
  console.log();
  return (
    <SectionStyled>
      <DropdownStyled>
        <BtnDropStyled>Show</BtnDropStyled>
        <DropContentStyled>
          <CheckStyled type="radio">all</CheckStyled>
          <CheckStyled type="radio">follow</CheckStyled>
          <CheckStyled type="radio">followings</CheckStyled>
        </DropContentStyled>
      </DropdownStyled>
      <Card part={part} />
      {Boolean(totalPart) && Math.floor(totalPart) - part >= 0 && (
        <BtnMoreStyled type="button" onClick={handleClick}>
          Load more
        </BtnMoreStyled>
      )}
    </SectionStyled>
  );
};

export default Tweets;
