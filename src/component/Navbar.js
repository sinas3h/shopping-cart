import React , {useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';

import { cartContext } from '../contex/CartContextProvider';

// css
import style from './Navbar.module.css'

const Navbar = () => {

    const {state} = useContext(cartContext)
    return (
        <div className={style.container}>

            <h2>Online Shopping</h2>
            <div className={style.navCenter}>
                <Link className={style.link} >Home</Link>
                <Link className={style.link} to='/products'>products</Link>
                <Link className={style.link} >Blog</Link>
                <Link className={style.link} >Contact</Link>
            </div>
            <div className={style.shoppingBag}>
                <Link  to='/shopping'>
                    <span className="material-symbols-outlined">
                    shopping_bag
                    </span>
                    <span>{state.counterSelect}</span>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;