import "./shopnav.css"

const ShopNav = ({searchedProduct, handleChassis, handleMemory, handleMotherBoard, handleProccessor, handleVideoCard}) => {
    return (
      <div className="shop-nav-container">
        <h1>
          <small>Shop /</small> 
          <p>{searchedProduct}</p>
        </h1>
        <button className="shop-nav-btn" onClick={(e) => handleChassis(e)}>
          Chassis
        </button>
        <button className="shop-nav-btn" onClick={(e) => handleMemory(e)}>
          Memory
        </button>
        <button className="shop-nav-btn" onClick={(e) => handleMotherBoard(e)}>
          Mother Board
        </button>
        <button className="shop-nav-btn" onClick={(e) => handleProccessor(e)}>
          Processor
        </button>
        <button className="shop-nav-btn" onClick={(e) => handleVideoCard(e)}>
          Video Card
        </button>
      </div>
    );
}

export default ShopNav