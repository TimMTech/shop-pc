
import ShopNav from "../../components/ShopNav";
import { useState } from "react";
import allProducts from "../../utils/ProductData/allProductData";
import chassis from "../../utils/ProductData/chassisData";
import memory from "../../utils/ProductData/memoryData";
import motherBoard from "../../utils/ProductData/motherBoardData";
import processor from "../../utils/ProductData/processorData.js";
import videoCard from "../../utils/ProductData/videoCardData";
import Content from "../../components/Content";
import styled from "styled-components";

const Shop = () => {
  const [showProduct, setShowProduct] = useState(allProducts);
  const [searchedProduct, setSearchedProduct] = useState("All Products");

  const handleChassisDisplay = (e) => {
    setShowProduct(chassis);
    setSearchedProduct(e.target.innerText);
  };

  const handleMemoryDisplay = (e) => {
    setShowProduct(memory);
    setSearchedProduct(e.target.innerText);
  };

  const handleMotherBoardDisplay = (e) => {
    setShowProduct(motherBoard);
    setSearchedProduct(e.target.innerText);
  };

  const handleProcessorDisplay = (e) => {
    setShowProduct(processor);
    setSearchedProduct(e.target.innerText);
  };

  const handleVideoCardDisplay = (e) => {
    setShowProduct(videoCard);
    setSearchedProduct(e.target.innerText);
  };

  return (
    <ShopWrapper>
      <ShopPanels>
        <LeftPanel>
          <ShopNav
            searchedProduct={searchedProduct}
            handleChassis={handleChassisDisplay}
            handleMemory={handleMemoryDisplay}
            handleMotherBoard={handleMotherBoardDisplay}
            handleProccessor={handleProcessorDisplay}
            handleVideoCard={handleVideoCardDisplay}
          />
        </LeftPanel>
        <RightPanel>
          <Content product={showProduct} />
        </RightPanel>
      </ShopPanels>
    </ShopWrapper>
  );
};

const ShopWrapper = styled.div`
  min-height: 100vh;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ShopPanels = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4rem;
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8rem;
  }
`;

const LeftPanel = styled.section`
  padding-left: 1.5rem;
`;

const RightPanel = styled.section`
  padding-left: 1.5rem;
`;
export default Shop;
