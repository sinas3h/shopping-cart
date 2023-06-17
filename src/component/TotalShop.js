import React, { useContext } from "react";
import { Link } from "react-router-dom";
//css
import style from "./TotalShop.module.css";

import { cartContext } from "../contex/CartContextProvider";

const TotalShop = (props, { productData }) => {
  const { counterSelect, total } = props.data;

  const { dispatch } = useContext(cartContext);
  return (
    <div className={style.container}>
      <h2>
        Total Items : <span>{counterSelect}</span>
      </h2>
      <h2>
        Total Payments : <span>$ {total}</span>
      </h2>
      <div>
        <button
          className={`${style.btn} ${style.btnClear}`}
          onClick={() => dispatch({ type: "CLEAR", payload: productData })}
        >
          Clear
        </button>
        
        <Link to="/signup">
        <button
          className={style.btn}
          onClick={() => dispatch({ type: "CHECK_OUT", payload: productData })}
        >
          Check Out
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TotalShop;
