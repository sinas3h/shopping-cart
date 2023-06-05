import React from "react";
import style from "./DetailProduct.module.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contex/ProductsContextProvider";
import { useContext } from "react";
import { quantityCount } from "../helper/function";
import { isInCart } from "../helper/function";
// context
import { cartContext } from "../contex/CartContextProvider";
//icons
import increase from "../icons/increase.svg";
import decrease from "../icons/decrease.svg";
import removeIcon from "../icons/trash.svg";

const DetailProduct = (props) => {

    const { state, dispatch } = useContext(cartContext);

  const params = useParams();
  const id = params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  return (
    <div>
      <div className={style.detailBlock}>
        <div className={style.image}>
          <img src={product.image} alt="product" />
        </div>
        <div className={style.title}>
          <h2>{product.title}</h2>
          <p>$ {product.price}</p>
        </div>
        <p className={style.description}>{product.description}</p>
      </div>
      <div className={style.addToCart}>
        <div className={style.items}>
        {isInCart(state, product.id) ? (
          <button
            className={style.addItem}
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          >
            Add to Cart
          </button>
        ) : (
          <div className={style.cartButtons}>
            {quantityCount(state, product.id) === 1 && (
              <button
                className={style.btn}
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: product })
                }
              >
                <img src={removeIcon} alt="removeIcon" />
              </button>
            )}
            {quantityCount(state, product.id) > 1 && (
              <button
                className={style.btn}
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: product })
                }
              >
                <img src={decrease} alt="decrease" />
              </button>
            )}
            {quantityCount(state, product.id) > 0 && (
              <span className={style.quantityCount}>
                {quantityCount(state, product.id)}
              </span>
            )}
            <button
              className={style.btn}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: product })
              }
            >
              <img src={increase} alt="increase" />
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
