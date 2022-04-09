import "./shopitem.css";
import { Link } from "react-router-dom"



const ShopItem = ({ product }) => {

  return (
    <div>
      <Link className="product-link" to={`/shop/${product.productId}`}>
        <div key={product.productId} className="item-container">
          <ul>
            <div className="image-container">
              <img
                className="product-image"
                src={product.previewImage}
                alt=" "
              />
            </div>
            <div className="product-info-container">
              <p>{product.productName}</p>
              <p>${product.productPrice}</p>
            </div>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default ShopItem;
