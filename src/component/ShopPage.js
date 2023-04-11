import React, { useContext } from "react";
// context
import { cartContext } from "../contex/CartContextProvider";

// component
import ShopLittle from "./ShopLittle";
import TotalShop from "./TotalShop";

//css
import style from "./ShopPage.module.css";

const ShopPage = () => {
  const { state } = useContext(cartContext);

  return (
    <div className={style.contentWrapper}>
      {state.total.length ? (
        <div className={style.content}>
          <div className={style.container}>
            {state.selectItem.map((item) => (
              <ShopLittle key={item.id} data={item} />
            ))}
          </div>

          <div>{state.counterSelect > 0 && <TotalShop data={state} />}</div>
        </div>
      ) : (
        <h2 className={style.empty}>Shopping Bag is Empty!</h2>
      )}
    </div>
  );
};

export default ShopPage;
