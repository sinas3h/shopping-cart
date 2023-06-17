import React, { useEffect, useState } from "react";
import { validation } from "../helper/validation";
import style from "./SignupPage.module.css" 

const SignupPage = ({handleShow}) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    checkbox: false,
  });

  const [touched, setTouched] = useState({});

  const [errorDisplay, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await setErrors(validation(data));
      return result;
    };

    fetchData();

    // console.log(errorDisplay)
  }, [data, touched]);

  const change = (e) => {
    if (e.target.name === "checkbox") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const focusHandler = (e) => {
    setTouched({...touched, [e.target.name]: true});
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errorDisplay).length) {
      console.log("ok");
    } else {
      setTouched({
        username: "true",
        email: "true",
        password: "true",
        confirmpassword: "true",
        checkbox: "true",
      });
    }
  };

  console.log(data);
  console.log(errorDisplay);

  return (
    <>
      <div className={style.signupForm}>
        <form>
          <div>
            <label>user name</label>
            <input
              type="text"
              name="username"
              value={data.username}
              onChange={change}
              onFocus={focusHandler}
            ></input>
            {errorDisplay.username && touched.username && (
              <span>{errorDisplay.username}</span>
            )}
          </div>
          <div>
            <label>email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={change}
              onFocus={focusHandler}
            ></input>
            {errorDisplay.email && touched.email && (
              <span>{errorDisplay.email}</span>
            )}
          </div>
          <div>
            <label>password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={change}
              onFocus={focusHandler}
            ></input>
            {errorDisplay.password && touched.password && (
              <span>{errorDisplay.password}</span>
            )}
          </div>
          <div>
            <label>confirm password</label>
            <input
              type="password"
              name="confirmpassword"
              value={data.confirmpassword}
              onChange={change}
              onFocus={focusHandler}
            ></input>
            {errorDisplay.confirmpassword && touched.confirmpassword && (
              <span>{errorDisplay.confirmpassword}</span>
            )}
          </div>
          <div>
            <label>accept rules</label>
            <input
              type="checkbox"
              name="checkbox"
              value={data.checkbox}
              onChange={change}
            //   onFocus={focusHandler}
            ></input>
            {errorDisplay.checkbox && touched.checkbox && (
              <span>{errorDisplay.checkbox}</span>
            )}
          </div>
          <div>
            <button onClick={submitHandler} type="submit">
              SIGN UP
            </button>
          </div>
          <div className={style.changeForm}>
            <p className={style.b}>have an account?</p>
            <p onClick={handleShow}>Log in</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
