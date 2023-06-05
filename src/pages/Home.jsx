import { Link } from "react-router-dom";
import { ImgStyled, SectionHomeStyled } from "./pages.syled";
import { wellcome } from "../img";

const Home = () => {
  return (
    <SectionHomeStyled>
      <ImgStyled src={wellcome} alt="" />
      <h2>
        Hi!
        </h2> <h1>We are delighted to welcome you to our site.
      </h1>
      <h2>Now, shall we mark our preferred tweets?</h2>
      <Link to="/tweets">Go to the Tweets page</Link>
    </SectionHomeStyled>
  );
};

export default Home;
