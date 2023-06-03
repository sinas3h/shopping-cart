import React from 'react';
import style from './DetailProduct.module.css'
import { useParams } from "react-router-dom";
import { ProductContext } from '../contex/ProductsContextProvider';
import { useContext } from 'react';


const DetailProduct = (props) => {
    const params = useParams()
    const id = params.id
    const data = useContext(ProductContext)
    const product = data[id - 1]
    return (
        <div>
            <div className={style.detailBlock}>
                <div className={style.image}>
                    <img src={product.image} />
                </div>
                <div className={style.title}>
                    <h2>{product.title}</h2>
                    <p>$ {product.price}</p>
                </div>
                <p className={style.description}>{product.description}</p>
            </div>
        </div>
    );
};

export default DetailProduct;