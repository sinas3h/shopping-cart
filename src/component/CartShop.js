import React, { useContext } from 'react';

// fuction
import { shorten } from '../helper/function';
import { quantityCount } from '../helper/function';
import { inInCart } from '../helper/function';

// context
import { cartContext } from '../contex/CartContextProvider';

// css
import style from './CartShop.module.css'

const CartShop = ({productData}) => {


    const{state , dispatch } = useContext(cartContext)


    return (
        <div className={style.cart}>
            <div className={style.image}><img src={productData.image} alt='cart'/></div>
            <h2>{shorten(productData.title)}</h2>
            <p className={style.price}>${productData.price}</p>
            <div className={style.items}>
                {/* <p>{productData.price} $</p> */}
                    
                    
                    {quantityCount(state , productData.id) === 1 && <button className={style.btn} onClick={() => dispatch({type : 'REMOVE_ITEM' , payload : productData})} ><i className={style.remove} className="fa fa-trash"></i></button>}

                    {quantityCount(state , productData.id) > 1 && <button className={style.btn} onClick={() => dispatch({type : 'DECREASE' , payload : productData})} ><i className="fa fa-angle-down"></i></button>}

                    {quantityCount(state , productData.id) > 0 && <span>{quantityCount(state , productData.id)}</span>}


                    {inInCart(state , productData.id) ? <button className={style.addItem} onClick={() => dispatch({type : 'ADD_ITEM' , payload : productData})} >Add to cart</button> :
                    <button className={style.btn} onClick={() => dispatch({type : 'INCREASE' , payload : productData})} ><i className="fa fa-angle-up"></i></button> }

            </div>
        </div>
    );
};

export default CartShop;