import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// css
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.container}>
            <div>
                <Link className={style.link} to='/products'>products</Link>
            </div>
            <div>
                <Link className={style.link} to='/shoping'>Shop</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Navbar;