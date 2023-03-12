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
        <div className={style.mainWrapper}>

        <div className={style.mainDiv}>
            <div>
                <h3>Home/Products</h3>
                <h2 className={style.header}>Shop</h2>
                <h3>default sorting</h3>
            </div>
        </div>

        <div className={style.main}>
            {!products.length ? <div><span className={style.loading}></span></div> :
            products.map(product => <CartShop key={product.id} productData={product} />)}
        </div>

        </div>

    )

        


};

export default MainPage;
