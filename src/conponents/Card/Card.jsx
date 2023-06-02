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
  selectorClicked,
  selectorUsers,
} from "../../redux/userSelector";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const userRender = useSelector(selectorUsers);
  const isClicked = useSelector(selectorClicked);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch((state) => !state.isClicked);
  };

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
            <InfoLineStyled>{el.followers} FOLLOWERS</InfoLineStyled>
            <BtnStyled type="button" onClick={handleClick} color={isClicked}>
              {isClicked ? "Following" : "Follow"}
            </BtnStyled>
          </WrapUser>
        </ItemStyled>
      ))}
    </ListStyled>
  );
};

export default Card;
