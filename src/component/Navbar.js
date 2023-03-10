import React , {useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';

import { cartContext } from '../contex/CartContextProvider';

// css
import style from './Navbar.module.css'

const Navbar = () => {

    const {state} = useContext(cartContext)
    return (
        <div className={style.container}>

            <h2>Shophub</h2>
            <div className={style.navCenter}>
                <Link className={style.link} >Home</Link>
                <Link className={style.link} to='/products'>products</Link>
                <Link className={style.link} >Blog</Link>
                <Link className={style.link} >Contact</Link>
            </div>
            <div>
                <Link className={style.link} to='/shoping'>Shop</Link>
                <span>{state.counterSelect}</span>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;