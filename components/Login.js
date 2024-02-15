import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import Home from './Home';

import Styles from "../styles/Login.module.css";
import SignUp from './SignUp';
import SignIn from './SignIn';

function Login() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  if (user.token) {
    return <Home />;
  }

  return (
    <div className={Styles.container}>

      <div className={Styles.leftContent}>
        <img src="mg-4a97cd7c-w2279.jpeg" alt="Background" className={Styles.backgroundImage} />
      </div>
      <div className={Styles.rightContent}>
        <div className={Styles.header}>
          <img src="logo-twitter-blanc-png.png" alt="Logo" className={Styles.logo} />
        </div>
        <div className={Styles.content}>
          <h1 className={Styles.title}>See what's happening  </h1>
          <h2 className={Styles.text}>Join Hackatweet today.</h2>
          <div className={Styles.buttons}>

            <SignUp />
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;