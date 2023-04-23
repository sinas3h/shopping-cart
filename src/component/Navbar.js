import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { cartContext } from "../contex/CartContextProvider";

// css
import style from "./Navbar.module.css";

import bagIcon from "../icons/bag.svg";

const Navbar = () => {
  const { state } = useContext(cartContext);

  const [menu , setMenu] = useState(false)

  return (
    <div className={style.container}>
      <div onClick={()=> setMenu(!menu)} className={style.menuBlock}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Online Shopping</h2>
      <ul className={!menu ? style.navCenter : `${style.navCenter} ${style.navCenterActive}`}>
        <li>
          <Link className={style.link}>Home</Link>
        </li>
        <li>
          <Link className={style.link} to="/products">
            products
          </Link>
        </li>
        <li>
          <Link className={style.link}>Blog</Link>
        </li>
        <li>
          <Link className={style.link}>Contact</Link>
        </li>
        <li>
        <div className={style.searchBlock} >
        <input
          className={style.searchInput}
          type="text"
          placeholder="Search Product"
          autoComplete="no"
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </div>
        </li>
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
