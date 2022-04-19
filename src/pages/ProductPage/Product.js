import { useParams } from "react-router-dom";
import allProducts from "../../utils/ProductData/allProductData";
import styled from "styled-components";


const ProductPage = ({ addToCart }) => {
  const { productId } = useParams();
  const thisProduct = allProducts.find((prod) => prod.productId === productId);

  return (
    <ProductPageWrapper key={productId}>
      <ProductSection>
        <InfoContainer>{thisProduct.productName}</InfoContainer>
        <ImageContainer>
          <StyledImage src={thisProduct.previewImage} alt=" " />
        </ImageContainer>
        <CartContainer>
          <Text>Your Item</Text>
          <PriceText>${thisProduct.productPrice}</PriceText>
          <AddButton onClick={() => addToCart(thisProduct)}>
            Add To Cart
          </AddButton>
          <BuyButton>Buy Now</BuyButton>
        </CartContainer>
      </ProductSection>
    </ProductPageWrapper>
  );
};

const ProductPageWrapper = styled.div`
  min-height: 100vh;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ProductSection = styled.section`
  display: flex;
  padding-left: 5rem;
  justify-content: start;
  align-items: center;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rem;
    width: 100%;
    padding-left: 0;
  }
`;

const InfoContainer = styled.div`
  font-family: "Montserrat Bold";
  display: flex;
  flex-direction: column;
  font-size: 4.5rem;
  @media (max-width: 650px) {
    width: 100%;
    text-align: center;
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  height: 100vh;
  background-color: rgb(241, 238, 233);
  @media (max-width: 650px) {
    height: 0;
    background-color: rgb(255, 255, 255);
  }
`;

const StyledImage = styled.img`
  width: 30rem;
  padding-top: 12rem;
  @media (max-width: 650px) {
    width: 100%;
    padding-top: 0;
  }
`;

const CartContainer = styled.div`
  min-width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 650px) {
    width: 100%;
    padding-top: 28rem;
  }
`;

const Text = styled.p`
  font-family: "Montserrat SemiBold";
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

const PriceText = styled.p`
  font-family: "Montserrat Medium";
`;

const AddButton = styled.button`
  background-color: rgb(241, 229, 213);
  font-family: "Montserrat Medium";
  letter-spacing: 0.2rem;
  width: 10rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: none;
  transition: 1s;
  &: hover {
    background-position: 0;
    animation: shine 1s infinite linear;
    animation-fill-mode: forwards;
    background: linear-gradient(to right, rgb(241, 229, 213) 0, white 100%);
    background: position 0;
    transform: scale(1.1, 1.1);
  }
`;

const BuyButton = styled.button`
  font-family: "Montserrat Medium";
  letter-spacing: 0.2rem;
  width: 10rem;
  height: 5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  border: none;
  background-color: rgb(134, 110, 78);
  transition: 1s;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export default ProductPage;
