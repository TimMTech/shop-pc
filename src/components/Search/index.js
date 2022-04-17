
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search = ({
  handleSearch,
  closeSearch,
  showSearch,
  searchFilteredProduct,
  searchEnteredProduct,
  filteredData,
  searchValue,
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

  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {showSearch && (
        <>
          <SearchModal
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeSearch}
            transition={{ ease: "easeOut", duration: 0.5 }}
          />
          <SearchModalContainer
            variants={searchbar}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <SearchWrapper>
              <SearchContainer>
                <CloseIcon onClick={closeSearch}>x</CloseIcon>
                <StyledInput
                  autoFocus
                  value={searchValue}
                  autoComplete="off"
                  name="product"
                  type="text"
                  onChange={(e) => handleSearch(e)}
                  placeholder="Search Product"
                />
                <Button
                  onClick={() => {
                    searchEnteredProduct(filteredData[0].productId);
                    navigate(`/shop/${filteredData[0].productId}`);
                  }}
                >
                  Enter
                </Button>
              </SearchContainer>
              <FilteredProductModal
                variants={filtered}
                initial="hidden"
                animate="visible"
              >
                {filteredData.length != 0 && (
                  <div>
                    {filteredData.map((item) => {
                      return (
                        <FilteredItems key={item.productId}>
                          <StyledLink
                            onClick={searchFilteredProduct}
                            to={`/shop/${item.productId}`}
                          >
                            <ProductName>{item.productName}</ProductName>
                          </StyledLink>
                        </FilteredItems>
                      );
                    })}
                  </div>
                )}
              </FilteredProductModal>
            </SearchWrapper>
          </SearchModalContainer>
        </>
      )}
    </AnimatePresence>
  );
};

const SearchModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000dd;
  z-index: 9;
`;

const SearchModalContainer = styled(motion.div)`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: none;
  z-index: 10;
  @media (max-width: 650px) {
    width: 100%;
  }
`;

const FilteredProductModal = styled(motion.div)`
  height: 10rem;
  width: 60%;
  overflow: scroll;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid white;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  padding: 0 1.5rem;
  @media (max-width: 650px) {
    width: 70%;
  }
`;

const CloseIcon = styled.span`
  font-family: "Montserrat Bold";
  color: rgb(255, 255, 255);
  position: absolute;
  top: 20%;
  right: 20%;
  cursor: pointer;
  font-size: 3rem;
  transition: 1s;
`;

const StyledInput = styled.input`
  font-family: "Montserrat Bold";
  color: rgb(255, 255, 255);
  font-size: 5.2vw;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(255, 255, 255);
  }
`;

const Button = styled.button`
  font-family: "Montserrat Bold";
  width: 4rem;
  height: 2.5rem;
  background: transparent;
  color: rgb(255, 255, 255);
  cursor: pointer;
  transition: 1s;
`;

const FilteredItems = styled.div`
  font-family: "Montserrat SemiBold";
  color: rgb(255, 255, 255);
  font-size: 3.1vw;
  padding-top: 0.5rem;
  @media (max-width: 650px) {
    width: 70%;
  }
`;

const StyledLink = styled(Link)`
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255, 0);
  transition: text-decoration-color 1s;
`;

const ProductName = styled.p`
  cursor: pointer;
`;

export default Search;
