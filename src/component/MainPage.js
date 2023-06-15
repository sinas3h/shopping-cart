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

  const [sortTitle, setSortTitle] = useState("default sorting");

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

  const defaultHandler = () => {
    const sortDefault = filterProducts.sort(function (a, b) {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
      return 0;
    });
    setFilterProducts(sortDefault);
    setSortTitle("default sort");
  };

  const azHandler = () => {
    const sortAZ = filterProducts.sort(function (a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      return 0;
    });
    setFilterProducts(sortAZ);
    setSortTitle("A to Z");
  };

  const zaHandler = () => {
    const sortZA = filterProducts.sort(function (a, b) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      return 0;
    });
    setFilterProducts(sortZA);
    setSortTitle("Z to A");
  };

  const priceLowHandler = () => {
    const sortPriceLow = filterProducts.sort(function (a, b) {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
    setFilterProducts(sortPriceLow);
    setSortTitle("low to high");
  };

  const priceHighHandler = () => {
    const sortPriceHigh = filterProducts.sort(function (a, b) {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
    setFilterProducts(sortPriceHigh);
    setSortTitle("high to low");
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
        {/* <h3>category :</h3> */}
        <div className={style.categorySort}>
          <div className={style.category}>
            <button onClick={AllProductsHandler} autoFocus="yes">
              All Products
            </button>
            <button onClick={favoriteHandler}>Favorite</button>
            <button onClick={mensHandler}>men's clothing</button>
            <button onClick={jeweleryHandler}>jewelery</button>
            <button onClick={electronicsHandler}>electronics</button>
            <button onClick={womensHandler}>women's clothing</button>
            <div className={style.fadeLeft}></div>
            <div className={style.fadeRight}></div>
          </div>

          <div className={style.sort}>
            <button onClick={() => setViewSort(!viewSort)}>
              <div>{sortTitle}</div>
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
                  <li onClick={defaultHandler}>default sort</li>
                  <li onClick={azHandler}>Name: A to Z</li>
                  <li onClick={zaHandler}>Name: Z to A</li>
                  <li onClick={priceLowHandler}>sort by price : low to high</li>
                  <li onClick={priceHighHandler}>
                    sort by price : high to low
                  </li>
                </ul>
              </div>
            </button>
          </div>
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
