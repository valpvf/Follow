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
import {
  selectorPart,
  selectorUsers,
} from "../../redux/userSelector";
import { useDispatch, useSelector } from "react-redux";
// import { changeUser } from "../../redux/userSlice";
import { useEffect, useMemo } from "react";
import { changeUser, getUser } from "../../redux/userOperations";

const Card = ({ mark }) => {
  const dispatch = useDispatch();
  const allUsers = useSelector(selectorUsers);
  const part = useSelector(selectorPart);

  useEffect(() => {
    allUsers.length === 0 && dispatch(getUser());
  }, [dispatch, allUsers.length]);

  const userRender = useMemo(() => {
    return allUsers.slice(0, part * 3);
  }, [allUsers, part]);

  const render =
    mark === ""
      ? userRender
      : userRender.filter((el) => el.isChanged === mark);

  const handleClick = (data) => {
    console.log("data", data);
    dispatch(changeUser(data));
  };

  return (
    <ListStyled>
      {render.map((el) => (
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
              onClick={(e) =>
                handleClick([el.id, el.followers, el.isChanged, part])
              }
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
