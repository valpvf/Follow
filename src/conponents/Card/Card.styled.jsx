import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 48px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 48px; */
  width: 380px;
  height: 460px;
  padding: 20px 20px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoStyled = styled.svg`
  width: 76px;
  height: 22px;
  fill: rgba(255, 255, 255, 0.3);
`;

export const InfoStyled = styled.img`
  display: block;
  width: 308px;
  height: 168px;
  margin: 0 auto;
`;

export const WrapUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

export const BoxStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LineStyled = styled.div`
  position: absolute;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const RoundStyled = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  &:last-of-type {
    width: 64px;
    height: 64px;
    border: 8px solid #ebd8ff;
  }
`;

export const PhotoStyled = styled.img`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const InfoLineStyled = styled.p`
  margin: 0;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const BtnStyled = styled.button`
  width: 196px;
  padding: 14px 0;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  background: ${(props) =>
    props.color === false ? "#ebd8ff" : "#5CD3A8"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  &{isClicked} {

  }
`;
