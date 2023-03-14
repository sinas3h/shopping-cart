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
            <div className={style.mainBlockDetail}>
                <h3>Home / <span>Products</span></h3>
                <h2 className={style.header}>Shop</h2>
                <h3>default sorting</h3>
            </div>
        </div>

        <div className={style.blobYellow}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FED74C" d="M31.4,18.4C17,43.1,-34.7,46.5,-46.2,23.5C-57.6,0.6,-28.8,-48.8,-3,-50.5C22.9,-52.2,45.8,-6.3,31.4,18.4Z" transform="translate(100 100)" />
            </svg>
        </div>

        

        <div className={style.blobBlue}>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#0155B6" d="M52.6,-68.9C68,-61.3,80,-45.6,86,-27.8C92,-10,92,9.9,84.1,25.2C76.2,40.5,60.5,51.1,45.2,62.1C29.9,73.2,14.9,84.7,-0.8,85.8C-16.5,86.9,-33,77.5,-46.3,65.7C-59.5,54,-69.6,40,-77.2,23.5C-84.7,7,-89.8,-11.9,-85.4,-28.5C-81,-45.1,-67.2,-59.3,-51.4,-66.8C-35.6,-74.3,-17.8,-75,0.4,-75.6C18.6,-76.2,37.3,-76.6,52.6,-68.9Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div className={style.main}>
            {!products.length ? <div><span className={style.loading}></span></div> :
            products.map(product => <CartShop key={product.id} productData={product} />)}
        </div>

        </div>

    )

        


};

export default MainPage;
