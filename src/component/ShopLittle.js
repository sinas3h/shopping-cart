import React, { useContext } from "react";

//function
import { shorten } from "../helper/function";
// css
import style from "./ShopLittle.module.css";
// context
import { cartContext } from "../contex/CartContextProvider";

const ShopLittle = (props) => {
  const { dispatch } = useContext(cartContext);
  const { image, title, quantity, price } = props.data;
  return (
    <div className={style.container}>
      <div className={style.image}>
        <img src={image} alt="img" />
      </div>
      <div className={style.containerDetails}>
        <div>
          <h2>{shorten(title)}</h2>
          <p>${price}</p>
        </div>
        <p>{quantity}</p>
      </div>

      <div>
        {quantity === 1 ? (
          <button
            className={style.btn}
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <i className={style.remove} className="fa fa-trash"></i>
          </button>
        ) : (
          <button
            className={style.btn}
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            <i className="fa fa-angle-down"></i>
          </button>
        )}
        <button
          className={style.btn}
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          <i className="fa fa-angle-up"></i>
        </button>
      </div>
    </div>
  );
};

export default ShopLittle;
