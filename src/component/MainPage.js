import React , { useContext } from 'react';
// context
import { ProductContext } from '../contex/ProductsContextProvider';
// component
import CartShop from './CartShop';
// css
import style from './MainPage.module.css'

const MainPage = () => {

    const products = useContext(ProductContext)

    return (

        <div className={style.main}>
            {products.map(product => <CartShop key={product.id} productData={product} />)}
        </div>

    )

        


};

export default MainPage;
