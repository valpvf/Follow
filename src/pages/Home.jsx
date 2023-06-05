import { GoTweetsImgStyled, Header1Styled, Header2Styled, ImgStyled, LinkToTweetsStyled, SectionHomeStyled } from "./pages.syled";
import { wellcome } from "../img";

const Home = () => {
  return (
    <SectionHomeStyled>
      <ImgStyled src={wellcome} alt="" />
      <Header2Styled>Hi!</Header2Styled>{" "}
      <Header1Styled>We are delighted to welcome you to our site.</Header1Styled>
      <Header2Styled>Now, shall we mark our preferred tweets?</Header2Styled>
      <LinkToTweetsStyled to="/tweets">
        Go to the Tweets page
        <GoTweetsImgStyled />
      </LinkToTweetsStyled>
    </SectionHomeStyled>
  );
};

export default Home;
