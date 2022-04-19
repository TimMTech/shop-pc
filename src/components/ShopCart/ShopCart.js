
import CartItem from "../CartItem/CartItem.js"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const cart = {
  hidden: { x: "100%" },
  visible: { x: "0" },
};

const ShopCart = ({
  closeCart,
  showCart,
  cartContent,
  items,
  totalPrice,
  updateQuantity,
}) => {
  const newItem = items.map((details) => (
    <CartItem
      key={details.productId}
      item={details}
      updateQuantity={updateQuantity}
    />
  ));

  const format = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formatter.format(amount);
  };

  return (
    <AnimatePresence>
      {showCart && (
        <>
          <Modal
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeCart}
            transition={{ ease: "easeOut", duration: 0.5 }}
          />
          <ShopModal
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <div>
              <div>
                <ShopCartTitle>
                  <Paragraph>Your Shopping Cart</Paragraph>
                  <CloseIcon onClick={closeCart}>x</CloseIcon>
                </ShopCartTitle>

                {cartContent && cartContent.length > 0 && (
                  <CartContent>
                    <CartItems>{newItem}</CartItems>
                    <CartTotal>SubTotal: {format(totalPrice)}</CartTotal>
                  </CartContent>
                )}
                {cartContent && cartContent.length === 0 && (
                  <EmptyCart>
                    <EmptyCartParagraph>
                      Your Bag Is Empty
                    </EmptyCartParagraph>
                    <StyledLink onClick={closeCart} to={"/shop"}>
                      Browse Products
                    </StyledLink>
                  </EmptyCart>
                )}
              </div>
            </div>
          </ShopModal>
        </>
      )}
    </AnimatePresence>
  );
};

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000dd;
  z-index: 9;
`;

const ShopModal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 33%;
  height: 100%;
  background: #f8f5f2;
  z-index: 10;
  overflow-y: scroll;
  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ShopCartTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Montserrat Medium";
  @media (max-width: 650px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Paragraph = styled.p`
  padding-top: 3rem;
  padding-right: 5rem;
  font-size: 1.2rem;
  @media (max-width: 650px) {
    font-size: 1rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
`;

const CloseIcon = styled.span`
  content: "x";
  cursor: pointer;
  font-size: 2rem;
  transition: 1s;
  &: hover {
    transform: scale(1.1);
  }
`;

const CartContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 3rem;
`;

const CartItems = styled.div``;

const CartTotal = styled.div`
  font-family: "Montserrat Bold";
  padding-left: 1rem;
  padding-top: 2rem;
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 650px) {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const EmptyCartParagraph = styled.p.attrs(() => ({
  'data-testid': 'Empty Cart'
}))`
  font-family: "Montserrat Bold";
  text-align: center;
  font-size: 3.2rem;
  @media (max-width: 650px) {
    font-size: 2rem;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Montserrat Medium";
  color: rgb(0, 0, 0);
  text-decoration: none;
  border: 0.1rem solid black;
  margin-top: 3rem;
  padding-top: 1.8rem;
  background: #f8f5f2;
  height: 5rem;
  width: 20rem;
  text-align: center;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  transition: 1s;
  &: hover {
    transform: scale(1.1, 1.1);
  }
  @media (max-width: 650px) {
    height: 6rem;
    width: 13rem;
  }
`;

export default ShopCart;
