import { useRef } from "react";
import styled from "styled-components";

const Cartitem = ({ item, updateQuantity }) => {
  const { quantity } = item;

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(amount);
  };

  const input = useRef(null);

  const quantityHandler = (e) => {
    const value = e.target.value;

    updateQuantity(item.productName, +value);
  };

  const decrementQuantity = () => {
    input.current.value = quantity - 1;
    updateQuantity(item.productName, +input.current.value);
  };

  const incrementQuantity = () => {
    input.current.value = quantity + 1;
    updateQuantity(item.productName, +input.current.value);
  };

  return (
    <CartItemWrapper>
      <CartImageContainer>
        <StyledImage src={item.previewImage} alt=" " />
      </CartImageContainer>
      <CartInfoContainer>
        <ProductName>{item.productName}</ProductName>
        <ProductPrice>{format(item.productPrice)}</ProductPrice>
        <QuantityContainer>
          <Button onClick={decrementQuantity}>-</Button>
          <StyledInput
            defaultValue={quantity}
            ref={input}
            type="number"
            onChange={(e) => quantityHandler(e)}
          />
          <Button onClick={incrementQuantity}>+</Button>
        </QuantityContainer>
      </CartInfoContainer>
    </CartItemWrapper>
  );
};

const CartItemWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  font-family: "Montserrat";
  gap: 1rem;
  padding-top: 1.5rem;
`;

const CartImageContainer = styled.div`
  display: flex;
  padding-left: 1rem;
`;

const StyledImage = styled.img`
  padding: 0.5rem;
  width: 4rem;
  height: 4rem;
  background-color: rgb(250, 246, 246);
`;

const CartInfoContainer = styled.div`
  text-align: left;
`;

const ProductName = styled.h3``;

const ProductPrice = styled.p``;

const QuantityContainer = styled.div`
  display: flex;
  width: 7rem;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 10%;
  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  border: 0.01rem thin black;
  height: 2rem;
  width: 3rem;
  text-align: center;
  text-align: center;
  margin: 0 0.5rem;
  font-size: 1rem;
`;

export default Cartitem;
