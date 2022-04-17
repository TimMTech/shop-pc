import "./index.css";
import Home from "./pages/HomePage";
import Shop from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Nav from "./components/Nav";
import ShopCart from "./components/ShopCart";
import Search from "./components/Search";
import SupportEngine from "./components/SupportEngine";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import allProducts from "./utils/ProductData/allProductData";


const App = () => {
  const [showCart, setShowCart] = useState(false);

  const [showSearch, setShowSearch] = useState(false);

  const [cart, setCart] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  const [filteredData, setFilteredData] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const openCart = () => {
    setShowCart(true);
  };
  const closeCart = () => {
    setShowCart(false);
  };

  const openSearch = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
    setFilteredData([]);
    setSearchValue("");
  };


  const handleSearch = (e) => {
    const value = e.target.value;
    const newFilter = allProducts.filter((product) => {
      return product.productName.toLowerCase().includes(value.toLowerCase());
    });
    if (value === "") {
      setFilteredData([]);
      setSearchValue("");
    } else {
      setFilteredData(newFilter);
      setSearchValue(value);
    }
  };

  const handleEnteredSearch = (productId) => {
    const filteredProducts = allProducts.filter((product) => {
      return product.productName
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      return;
    }
    if (filteredProducts[0].productName.includes(searchValue)) {
      setShowSearch(false);
      setFilteredData([]);
      setSearchValue("");
      return productId;
    }
  };

  const addToCart = (thisProduct) => {
    const currentCart = cart;
    const sameProduct = cart.filter(
      (cartProduct) => cartProduct.productName === thisProduct.productName
    );
    if (sameProduct.length === 1) {
      currentCart.map((currentProduct) =>
        currentProduct.productName === sameProduct[0].productName
          ? (currentProduct.quantity = currentProduct.quantity + 1)
          : null
      );
      setCart([...currentCart]);
    } else {
      setCart([...cart, { ...thisProduct, quantity: 1 }]);
    }
    setShowCart(true);
    calculateSubTotal();
  };

  const updateQuantity = (productName, quantity) => {
    const currentCart = cart;
    if (quantity === 0) {
      const newCart = currentCart.filter(
        (item) => item.productName !== productName
      );
      setCart([...newCart]);
    } else {
      const product = currentCart.find(
        (item) => item.productName === productName
      );
      product.quantity = quantity;
      currentCart.map((item) =>
        item.productName === productName ? product : null
      );
      setCart([...currentCart]);
    }
    calculateSubTotal();
  };

  const calculateSubTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      const total = item.productPrice * item.quantity;
      totalPrice += total;
    });
    setTotalPrice(totalPrice.toFixed(2));
  };

  useEffect(() => {
    calculateSubTotal();
  }, [cart]);

  return (
    <>
      <Nav
        openCart={openCart}
        openSearch={openSearch}
        cartContent={cart.length}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/:productId/"
          element={<ProductPage addToCart={addToCart} />}
        />
        
      </Routes>
      <Search
        handleSearch={handleSearch}
        closeSearch={closeSearch}
        searchFilteredProduct={closeSearch}
        searchEnteredProduct={handleEnteredSearch}
        showSearch={showSearch}
        filteredData={filteredData}
        searchValue={searchValue}
      />
      <ShopCart
        updateQuantity={updateQuantity}
        closeCart={closeCart}
        cartContent={cart}
        totalPrice={totalPrice}
        items={cart}
        showCart={showCart}
      />
      <SupportEngine />
    </>
  );
};

export default App;
