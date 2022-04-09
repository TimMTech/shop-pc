import "./productpage.css";
import { useParams } from "react-router-dom";
import allProducts from "../../utils/ProductData/allProductData";


const ProductPage = ({addToCart}) => {
  const { productId } = useParams();
  const thisProduct = allProducts.find((prod) => prod.productId === productId);


  return (
    <div className="product-page" key={productId}>
      <section className="product-container">
        <div className="info-container">
          <h1>{thisProduct.productName}</h1>
        </div>
        <div className="product-display-image-container">
          <img
            className="product-display-image"
            src={thisProduct.previewImage}
            alt=" "
          />
        </div>
        <div className="add-cart-container">
          <p>Your Item</p>
          <p className="product-price">${thisProduct.productPrice}</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(thisProduct)}>
            Add To Cart
          </button>
          <button className="buy-now-btn">Buy Now</button>
        </div>
      </section>
      
    </div>
  );
};

export default ProductPage;
