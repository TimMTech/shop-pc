import { useRef } from "react";
import "./cartitem.css";

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
    <div className="cart-item-container">
      <div className="cart-image-container">
        <img className="cart-image" src={item.previewImage} alt=" " />
      </div>
      <div className="cart-info-container">
        <h3>{item.productName}</h3>
        <p>{format(item.productPrice)}</p>
        <div className="quantity-container">
          <button className="quantity-btn" onClick={decrementQuantity}>
            -
          </button>
          <input
            defaultValue={quantity}
            ref={input}
            type="number"
            onChange={(e) => quantityHandler(e)}
            className="quantity"
          />
          <button className="quantity-btn" onClick={incrementQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
