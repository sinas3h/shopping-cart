import React, { useContext, useEffect, useState } from "react";
// context
import { ProductContext } from "../contex/ProductsContextProvider";
import { cartContext } from "../contex/CartContextProvider";
// component
import CartShop from "./CartShop";
// css
import style from "./MainPage.module.css";

const MainPage = () => {
  const products = useContext(ProductContext);

  const { state } = useContext(cartContext);

  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  const [viewSort, setViewSort] = useState(false);

  const mensHandler = () => {
    const mens = products.filter(
      (products) => products.category === "men's clothing"
    );
    setFilterProducts(mens);
  };

  const jeweleryHandler = () => {
    const jewelery = products.filter(
      (products) => products.category === "jewelery"
    );
    setFilterProducts(jewelery);
  };

  const electronicsHandler = () => {
    const electronics = products.filter(
      (products) => products.category === "electronics"
    );
    setFilterProducts(electronics);
  };

  const womensHandler = () => {
    const womens = products.filter(
      (products) => products.category === "women's clothing"
    );
    setFilterProducts(womens);
  };

  const favoriteHandler = () => {
    setFilterProducts(state.favorite);
  };

  const AllProductsHandler = () => {
    setFilterProducts(products);
  };

  console.log(filterProducts);

  return (
    <div className={style.mainWrapper}>
      <div className={style.topMainDiv}>
        <div className={style.topMainBlockDetail}>
          <p>shop with us!</p>
          <h2 className={style.header}>SPECIAL SALE</h2>
        </div>
      </div>

      <div className={style.mainBlockDetail}>
        <div className={style.category}>
          <button onClick={AllProductsHandler} autoFocus="yes">
            All Products
          </button>
          <button onClick={favoriteHandler}>Favorite</button>
          <button onClick={mensHandler}>men's clothing</button>
          <button onClick={jeweleryHandler}>jewelery</button>
          <button onClick={electronicsHandler}>electronics</button>
          <button onClick={womensHandler}>women's clothing</button>

          <button onClick={() => setViewSort(!viewSort)}>
            <div>default sorting</div>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </span>
            <div
              className={
                !viewSort ? style.sortwrapper : style.sortwrapperActive
              }
            >
              <ul>
                <li>Name: A to Z</li>
                <li>Name: Z to A</li>
                <li>sort by price : low to high</li>
                <li>sort by price : high to low</li>
              </ul>
            </div>
          </button>
        </div>
      </div>

      <div className={style.main}>
        {!filterProducts.length ? (
          <span className={style.loading}></span>
        ) : (
          filterProducts.map((filterProducts) => (
            <CartShop key={filterProducts.id} productData={filterProducts} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
