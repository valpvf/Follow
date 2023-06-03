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

const Card = () => {
  const userRender = useSelector(selectorUsers);
  const dispatch = useDispatch();

  return (
    <ListStyled>
      {userRender.map((el) => (
        <ItemStyled key={el.id}>
          <div>
            <LogoStyled>
              <use href={sprite + "#icon-logo"}></use>
            </LogoStyled>
            <InfoStyled src={info} alt="Info" />
          </div>
          <WrapUser>
            <BoxStyled>
              <LineStyled />
              <RoundStyled />
              <PhotoStyled src={el.avatar} alt={el.user} />
              <RoundStyled />
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
                    )},${el.followers.toString().substr(-3)}`}{"  "}
              FOLLOWERS
            </InfoLineStyled>
            <BtnStyled
              type="button"
              onClick={() =>
                dispatch(
                  changeUser({ type: "changeUser", payload: el.id })
                )
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
