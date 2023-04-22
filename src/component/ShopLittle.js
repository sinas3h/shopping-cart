import React, { useContext } from "react";

//function
import { shorten } from "../helper/function";
// css
import style from "./ShopLittle.module.css";
// context
import { cartContext } from "../contex/CartContextProvider";

//icons
import increase from "../icons/increase.svg";
import decrease from "../icons/decrease.svg";
import removeIcon from "../icons/trash.svg";

const ShopLittle = (props) => {
  const { dispatch } = useContext(cartContext);
  const { image, title, quantity, price } = props.data;
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={image} alt="img" />
      </div>
      <div className={style.containerDetails}>
        <div className={style.productDetail}>
          <h2>{shorten(title)}</h2>
          <p className={style.price}>${price}</p>
        </div>
        <p className={style.quantity}>{quantity}</p>
      </div>

      <div className={style.containerButtons}>
        {quantity === 1 ? (
          <button
            className={style.btn}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={removeIcon} alt="removeIcon"  />
          </button>
        ) : (
          <button
            className={style.btn}
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            <img src={decrease} alt="decrease" />
          </button>
        )}
        <button
          className={style.btn}
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          <img src={increase} alt="increase" />
        </button>
      </div>
    </div>
  );
};

export default ShopLittle;
