import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

// fuction
import { shorten } from "../helper/function";
import { quantityCount } from "../helper/function";
import { isInCart } from "../helper/function";

// context
import { cartContext } from "../contex/CartContextProvider";

//icons
import increase from "../icons/increase.svg";
import decrease from "../icons/decrease.svg";
import removeIcon from "../icons/trash.svg";
import heartIcon from "../icons/heart-outline.svg";
import heartBoldIcon from "../icons/heart-bold.svg";

// css
import style from "./CartShop.module.css";

const CartShop = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);
  const [favorite, setFavorite] = useState(false);

  const favoriteHandler = () => {
    setFavorite(!favorite);
    dispatch({
      type: `${!favorite ? "FAVORITE" : "UNFAVORITE"}`,
      payload: productData,
    });
  };

  console.log(state);

  return (
    <div className={style.cart}>
      {!favorite ? (
        <span className={style.cartFavorite} onClick={favoriteHandler}>
          <img src={heartIcon} alt="heart" />
        </span>
      ) : (
        <span className={style.cartFavorite} onClick={favoriteHandler}>
          <img src={heartBoldIcon} alt="heartBold" />
        </span>
      )}
      <div className={style.image}>
        <img src={productData.image} alt="cart" />
      </div>
      <div className={style.cartTitel}>
        <h2>{shorten(productData.title)}</h2>
        <p className={style.price}>${productData.price}</p>
      </div>
      <div className={style.items}>
        <div className={style.cartDetails}>
          <p>{productData.category}</p>
          <Link className={style.cartLink} to={`/products/${productData.id}`}>
            More Details
          </Link>
        </div>

        {isInCart(state, productData.id) ? (
          <button
            className={style.addItem}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
          >
            Add to Cart
          </button>
        ) : (
          <div className={style.cartButtons}>
            {quantityCount(state, productData.id) === 1 && (
              <button
                className={style.btn}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <img src={removeIcon} alt="removeIcon" />
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <button
                className={style.btn}
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                <img src={decrease} alt="decrease" />
              </button>
            )}
            {quantityCount(state, productData.id) > 0 && (
              <span className={style.quantityCount}>
                {quantityCount(state, productData.id)}
              </span>
            )}
            <button
              className={style.btn}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
            >
              <img src={increase} alt="increase" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartShop;
