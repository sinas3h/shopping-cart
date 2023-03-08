import React from 'react';
import { Navigate, Route , Routes } from 'react-router-dom';
// context
import ProductContextProvider from './contex/ProductsContextProvider';
import CartContextProvider from './contex/CartContextProvider';
// component
import MainPage from './component/MainPage';
import Navbar from './component/Navbar';
import ShopPage from './component/ShopPage';
// css
import style from './App.module.css'

const App = () => {


  return (
    <ProductContextProvider>
      <CartContextProvider>
      <Navbar />
        <Routes>
          <Route path='/shoping' element={<ShopPage />} />
          <Route path='/products' element={<MainPage />} />
          <Route path='/*' element={<Navigate to='./products' />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;