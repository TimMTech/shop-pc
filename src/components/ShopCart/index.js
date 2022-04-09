import "./shopcart.css";
import Cartitem from "../CartItem";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
    <Cartitem
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
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeCart}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="modal"
          />
          <motion.div
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="shop-cart-modal"
          >
            <div>
              <div>
                <div className="shop-cart-header">
                  <p>Your Shopping Cart</p>
                  <span className="close-icon" onClick={closeCart}>
                    x
                  </span>
                </div>

                {cartContent && cartContent.length > 0 && (
                  <div className="shop-cart-content">
                    <div className="shop-cart-items">{newItem}</div>
                    <div className="shop-cart-total">
                      SubTotal: {format(totalPrice)}
                    </div>
                  </div>
                )}
                {cartContent && cartContent.length === 0 && (
                  <div className="empty-cart-container">
                    <p className="empty-cart">Your Bag Is Empty</p>
                    <Link
                      onClick={closeCart}
                      className="browse-products"
                      to={"/shop"}
                    >
                      Browse Products
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShopCart;
