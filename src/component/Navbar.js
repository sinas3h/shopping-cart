import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { cartContext } from "../contex/CartContextProvider";

// css
import style from "./Navbar.module.css";

import bagIcon from "../icons/bag.svg"

const Navbar = () => {
  const { state } = useContext(cartContext);
  return (
    <div className={style.container}>
      <h2>Online Shopping</h2>
      <ul className={style.navCenter}>
        <li><Link className={style.link}>Home</Link></li>
        <li><Link className={style.link} to="/products">products</Link></li>
        <li><Link className={style.link}>Blog</Link></li>
        <li><Link className={style.link}>Contact us</Link></li>
      </ul>
      <div className={style.shoppingBag}>
        <Link to="/shopping">
          <img src={bagIcon} alt="bagIcon" />
          <span>{state.counterSelect}</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
