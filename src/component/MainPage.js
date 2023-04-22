import React, { useContext, useState } from "react";
// context
import { ProductContext } from "../contex/ProductsContextProvider";
// component
import CartShop from "./CartShop";
// css
import style from "./MainPage.module.css";

const MainPage = () => {

  
  const products = useContext(ProductContext);

  const [filterProducts , setFilterProducts] = useState(products)

  const mensHandler = () => {
    const electronics = products.filter(products => products.category= "men's clothing")
    setFilterProducts(electronics)
  }
 


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
          <button>All Products</button>
          <button>Favorite</button>
          <button onClick={mensHandler}>men's clothing</button>
         </div>
          <button>default sorting</button>
        </div>

      <div className={style.main}>
        {!products.length ? (
            <span className={style.loading}></span>
        ) : (
          products.map((product) => (
            <CartShop key={product.id} productData={products} />
          ))
        )}
      </div>
    </div>
  );
};

export default MainPage;
