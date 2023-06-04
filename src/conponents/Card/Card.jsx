import {
  BoxStyled,
  BtnStyled,
  InfoLineStyled,
  InfoStyled,
  ItemStyled,
  LineStyled,
  ListStyled,
  LogoStyled,
  PhotoStyled,
  RoundStyled,
  WrapUser,
} from "./Card.styled";
import { info, sprite } from "../../img/index";
import { selectorUsers } from "../../redux/userSelector";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../redux/userSlice";
import { useEffect, useMemo } from "react";
import { getUser } from "../../redux/userOperations";

const Card = ({part}) => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectorUsers);

  useEffect(() => {
    allUsers.length === 0 && dispatch(getUser(1));
  }, [dispatch, allUsers.length]);

  const userRender = useMemo(() => {
    return allUsers.slice(0, part*3);
  }, [allUsers, part]);

  const handleClick = (data) => {
    dispatch(changeUser({ type: "changeUser", payload: data }));
  };

  return (
    <ListStyled>
      {userRender.map((el) => (
        <ItemStyled key={el.id}>
          <LogoStyled>
            <use href={sprite + "#icon-logo"}></use>
          </LogoStyled>
          <InfoStyled src={info} alt="Info" />
          <WrapUser>
            <BoxStyled>
              <LineStyled />
              <RoundStyled />
              <RoundStyled />
              <PhotoStyled src={el.avatar} alt={el.user} />
            </BoxStyled>
            <InfoLineStyled>{el.tweets} TWEETS</InfoLineStyled>
            <InfoLineStyled>
              {el.followers < 1000
                ? el.followers
                : `${el.followers
                    .toString()
                    .substr(
                      0,
                      el.followers.toString().length - 3
                    )},${el.followers.toString().substr(-3)}`}
              {"  "}
              FOLLOWERS
            </InfoLineStyled>
            <BtnStyled
              type="button"
              onClick={(e) => handleClick(el.id)}
              isChanged={el.isChanged}
            >
              {el.isChanged ? "Following" : "Follow"}
            </BtnStyled>
          </WrapUser>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default Card;
