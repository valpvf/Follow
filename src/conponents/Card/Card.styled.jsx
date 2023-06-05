import styled from "@emotion/styled";

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`;

export const ItemStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-bottom: 36px;
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
  position: absolute;
  width: 76px;
  height: 22px;
  top: 20px;
  left: 20px;
  fill: rgba(255, 255, 255, 0.3);
`;

export const InfoStyled = styled.img`
  width: 308px;
  height: 168px;
`;

export const WrapUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  &:last-of-type {
    width: 64px;
    height: 64px;
    background: #5736a3;
  }
`;

export const PhotoStyled = styled.img`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const InfoLineStyled = styled.p`
  margin-top: 26px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  &:last-of-type {
    margin-top: 16px;
  }
`;

export const BtnStyled = styled.button`
  width: 196px;
  padding: 14px 0;
  margin-top: 26px;
  text-align: center;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background: ${(props) =>
    props.isChanged === false ? "#ebd8ff" : "#5CD3A8"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
