
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopItem = ({ product }) => {
  return (
    <ShopItemWrapper>
      <StyledLink to={`/shop/${product.productId}`}>
        <ItemContainerWrapper key={product.productId}>
          <StyledList>
            <ImageContainer>
              <StyledImage src={product.previewImage} alt=" " />
            </ImageContainer>
            <InfoContainer>
              <ProductName>{product.productName}</ProductName>
              <ProductPrice>${product.productPrice}</ProductPrice>
            </InfoContainer>
          </StyledList>
        </ItemContainerWrapper>
      </StyledLink>
    </ShopItemWrapper>
  );
};

const ShopItemWrapper = styled.div``;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(0, 0, 0);
`;

const ItemContainerWrapper = styled.div`
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(204, 196, 196, 0.08);
  cursor: pointer;
  transition: 100ms;
  &:hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 15rem;
  height: 15rem;
`;

const ImageContainer = styled.div``;

const StyledImage = styled.img`
  width: 15rem;
  height: 10rem;
  @media (max-width: 650px) {
    width: 8rem;
    height: 8rem;
    background-color: rgba(204, 196, 196, 0.08);
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  gap: 0.5rem;
`;

const ProductName = styled.p`
  font-family: "Montserrat SemiBold";
  font-size: 1.2rem;
  @media (max-width: 650px) {
    font-family: "Montserrat SemiBold";
    font-size: 0.7rem;
  }
`;

const ProductPrice = styled.p`
  font-family: "Montserrat";
  font-size: 1rem;
  @media (max-width: 650px) {
    font-family: "Montserrat SemiBold";
    font-size: 0.7rem;
  }
`;

export default ShopItem;
