import "./search.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Search = ({
  handleSearch,
  closeSearch,
  showSearch,
  searchFilteredProduct,
  searchEnteredProduct,
  filteredData,
  searchValue
}) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const searchbar = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const filtered = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const navigate = useNavigate()

  return (
    <AnimatePresence>
      {showSearch && (
        <>
          <motion.div
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeSearch}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="search-modal"
          />
          <motion.div
            variants={searchbar}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="search-modal-container"
          >
            <div className="search-container">
              <div className="search">
                <span className="close-search-icon" onClick={closeSearch}>
                  x
                </span>
                <input
                  value={searchValue}
                  autoComplete="off"
                  className="search-input"
                  name="product"
                  type="text"
                  onChange={(e) => handleSearch(e)}
                  placeholder="Search Product"
                />
                <button onClick={() => {
                  searchEnteredProduct(filteredData[0].productId)
                  navigate(`/shop/${filteredData[0].productId}`);
                  }} className="enter-search">
                  Enter
                </button>
              </div>
              <motion.div
                variants={filtered}
                initial="hidden"
                animate="visible"
                className="filtered-data-container"
              >
                {filteredData.length != 0 && (
                  <div>
                    {filteredData.map((item) => {
                      return (
                        <div className="filtered-items" key={item.productId}>
                          <Link
                            onClick={searchFilteredProduct}
                            to={`/shop/${item.productId}`}
                            className="link"
                          >
                            <p>{item.productName}</p>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Search;
