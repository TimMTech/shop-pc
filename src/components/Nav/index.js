import "./location.css";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ openCart, openSearch, cartContent }) => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <NavWrapper className={"nav-container " + location}>
      <Title>Game In Style</Title>
      <SearchButton
        onClick={openSearch}
        className="open-search-btn"
      >
        
      </SearchButton>
      <StyledList>
        <StyledListItem>
          <StyledLink className="link" to="/">
            Home
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink className="link" to="/shop">
            Shop
          </StyledLink>
        </StyledListItem>
        <StyledListItem>
          <CartButton className="cart-btn" onClick={openCart}>
            {cartContent > 0 ? (
              <CartContent className="cart-content">{cartContent}</CartContent>
            ) : null}
          </CartButton>
        </StyledListItem>
      </StyledList>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat ExtraLight";
  position: absolute;
  width: 90%;
  top: 12%;
  left: 5%;
  z-index: 5;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const Title = styled.p`
  letter-spacing: 3px;
  text-transform: uppercase;
  @media (max-width: 650px) {
    padding-bottom: 1.2rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.2rem;
`;

const StyledListItem = styled.li`
  list-style: none;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
  }
`;

const StyledLink = styled(Link)`

`;

const SearchButton = styled.button`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-size: 1.5rem;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
`;

const CartButton = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  background-size: 2rem;
`;

const CartContent = styled.span`
  font-family: "Montserrat Medium";
  display: inline-block;
  border: none;
  border-radius: 50%;
  text-align: center;
  width: 1.5rem;
  height: 1.5rem;
  transform: translate(-6px, -6px);
`;

export default Nav;
