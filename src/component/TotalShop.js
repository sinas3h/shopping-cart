import React from 'react';
//css
import style from './TotalShop.module.css'

const TotalShop = (props) => {
    const {counterSelect , total} = props.data
    return (
        <div className={style.container}>
            <h2>Total Items : {counterSelect}</h2>
            <h2>Total Payments : ${total}</h2>
            <div>
                <button className={style.btn}>Clear</button>
                <button className={style.btn}>Check Out</button>
            </div>
        </div>
    );
};

export default TotalShop;