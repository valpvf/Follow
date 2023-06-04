import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../conponents/Card/Card";
import { getUser } from "../redux/userOperations";
import {
  BtnDropStyled,
  BtnMoreStyled,
  DropContentStyled,
  DropdownStyled,
  SectionStyled,
} from "./Tweets.syled";
import { selectorUsers } from "../redux/userSelector";

const Tweets = () => {
  const dispatch = useDispatch();
  const totalPage = useSelector(selectorUsers).length / 3;
  const [part, setPart] = useState(1);
  const [page, setPage] = useState(1);

  const handleClick = () => {
    setPart(part + 1);
    page <= totalPage && dispatch(getUser(page));
  };
  console.log();
  return (
    <SectionStyled>
      <DropdownStyled>
        <BtnDropStyled>Show</BtnDropStyled>
        <DropContentStyled>
          <a href="/">all</a>
          <a href="/">follow</a>
          <a href="/">followings</a>
        </DropContentStyled>
      </DropdownStyled>
      <Card part={part} />
      {Boolean(totalPage) && Math.floor(totalPage) - part >= 0 && (
        <BtnMoreStyled type="button" onClick={handleClick}>
          Load more
        </BtnMoreStyled>
      )}
    </SectionStyled>
  );
};

export default Tweets;
