import React, { useState } from "react";
import SignupPage from "./SignupPage";
import Login from "./Login";
import style from "./Account.module.css";

const Account = () => {
  const [signupOn, setSignupOn] = useState(false);
  const handleShow = () => {
    setSignupOn(!signupOn)
  }
  return (
    <div className={style.loginWrapper}>
      {!signupOn && <Login handleShow={handleShow} />}
      <div className={style.blueWall}></div>
      {signupOn && <SignupPage handleShow={handleShow} />}
    </div>
  );
};

export default Account;
