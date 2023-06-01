// import { NavLink } from "react-router-dom";
import { HeaderStyled, ItemStyled, ListStyled } from "./Header.styled";

const Header = () => {
    return (
        <HeaderStyled>
            <nav>
                <ListStyled>
                    <ItemStyled>
                        <a>Home</a>
                    </ItemStyled>
                    <ItemStyled>
                        <a>Tweets</a>
                    </ItemStyled>
                </ListStyled>
            </nav>
        </HeaderStyled>
    )
}

export default Header;