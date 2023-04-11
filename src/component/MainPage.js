import React, { useContext } from "react";
// context
import { ProductContext } from "../contex/ProductsContextProvider";
// component
import CartShop from "./CartShop";
// css
import style from "./MainPage.module.css";

const MainPage = () => {
  const products = useContext(ProductContext);

  return (
    <div className={style.mainWrapper}>

      <div className={style.mainDiv}>
        <div className={style.mainBlockDetail}>
          <button>
            Home / <span>Products</span>
          </button>
          <h2 className={style.header}>Shop</h2>
          <button>default sorting</button>
        </div>
      </div>

      <div className={style.mainDiv}>
        <div className={style.mainBlockDetail}>
          <button>
            Home / <span>Products</span>
          </button>
          <button>default sorting</button>
        </div>
      </div>

      <div className={style.main}>
        {!products.length ? (
            <span className={style.loading}></span>
        ) : (
          products.map((product) => (
            <CartShop key={product.id} productData={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
