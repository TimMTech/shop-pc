import "./content.css";
import ShopItem from "../ShopItem";

const Content = ({ product }) => {
  const displayItems = product.map((data) => (
    <ShopItem key={data.productId} product={data} />
  ));

  return <div className="content-container">
      {displayItems}
      </div>;
};

export default Content;
