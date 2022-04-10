import "./shop.css";
import ShopNav from "../../components/ShopNav";
import { useState } from "react";
import allProducts from "../../utils/ProductData/allProductData";
import chassis from "../../utils/ProductData/chassisData";
import memory from "../../utils/ProductData/memoryData";
import motherBoard from "../../utils/ProductData/motherBoardData"
import processor from "../../utils/ProductData/processorData.js";
import videoCard from "../../utils/ProductData/videoCardData";
import Content from "../../components/Content";


const Shop = () => {
  const [showProduct, setShowProduct] = useState(allProducts);
  const [searchedProduct, setSearchedProduct] = useState('All Products')
  
  const handleChassisDisplay = (e) => {
    setShowProduct(chassis);
    setSearchedProduct(e.target.innerText)
  };

  const handleMemoryDisplay = (e) => {
    setShowProduct(memory)
    setSearchedProduct(e.target.innerText)
  }

  const handleMotherBoardDisplay = (e) => {
    setShowProduct(motherBoard)
    setSearchedProduct(e.target.innerText)
  }

  const handleProcessorDisplay = (e) => {
    setShowProduct(processor)
    setSearchedProduct(e.target.innerText)
  }

  const handleVideoCardDisplay = (e) => {
    setShowProduct(videoCard)
    setSearchedProduct(e.target.innerText)
  }

  return (
    <div className="shop-container">
      <div className="shop-panels">
        <div className="media-nav-query">
          <ShopNav
            searchedProduct={searchedProduct}
            handleChassis={handleChassisDisplay}
            handleMemory={handleMemoryDisplay}
            handleMotherBoard={handleMotherBoardDisplay}
            handleProccessor={handleProcessorDisplay}
            handleVideoCard={handleVideoCardDisplay}
          />
        </div>
        <div className="media-content-query">
          <Content product={showProduct} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
