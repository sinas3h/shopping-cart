import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// context
import ProductContextProvider from "./contex/ProductsContextProvider";
import CartContextProvider from "./contex/CartContextProvider";
// component
import MainPage from "./component/MainPage";
import Navbar from "./component/Navbar";
import ShopPage from "./component/ShopPage";
import DetailProduct from "./component/DetailProduct";
import Account from "./component/Account";
import Home from "./component/Home";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/shopping" element={<ShopPage />} />
          <Route path="/products" element={<MainPage />} />
          <Route path="/products/:id" element={<DetailProduct />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
