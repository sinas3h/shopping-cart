import React, { useState } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import shop from "../icons/shop2.png";

const Home = () => {
  const [view, setView] = useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.topMainDiv}>
        <div className={style.topMainBlockDetail}>
          <div>
            <p>Let's Find The Best</p>
            <h2 className={style.header}>ONLINE<br></br>SHOPPING</h2>
          </div>
          <div className={style.viewProducts}>
            <Link
              className={style.link}
              onClick={() => {
                setView(true);
              }}
              to="/products"
            >
              view Products
            </Link>
          </div>
        </div>
        <div>
          <img className={style.homeImage} src={shop} alt="homeImage" />
        </div>
      </div>
    </div>
  );
};

export default Home;
