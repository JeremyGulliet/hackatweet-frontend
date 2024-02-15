import React, { useState } from 'react';
import Styles from "../styles/Login.module.css";

function Login() {

  const [signupFirstname, setSignupFirstname] = useState('');
  const [signupUsername, setSignupUsername] = useState ('');
  const [signupPassword, setSignupPassword] = useState ('');

  const [signinUsername, setSigninUsername] = useState ('');
  const [signinPassword, setSigninPassword] = useState ('');

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signupFirstname, username: signupUsername, password: signupPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
          //ou (data)
					dispatch(login({ username: signupUsername, token: data.token }));
					setSignupUsername('');
					setSignupPassword('');
          setSignupFirstname('');
					// setIsModalVisible(false)
				}
			});const handleConnection = () => {

        fetch('http://localhost:3000/users/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: signinUsername, password: signinPassword }),
        }).then(response => response.json())
          .then(data => {
            if (data.result) {
              //(data)
               dispatch(login({ username: signinUsername, token: data.token }));
              setSigninUsername('');
              setSigninPassword('');
              // setIsModalVisible(false)
            }
          });
      };
    
	};
  
    return(
      <div className={Styles.container}>
        <div className={Styles.leftContent}>
          <img src="mg-4a97cd7c-w2279.jpeg" alt="Background" className={Styles.backgroundImage}/>
        </div>
        <div className={Styles.rightContent}>
          <div className={Styles.header}> 
            <img src="logo-twitter-blanc-png.png" alt="Logo" className={Styles.logo}/>
          </div>
          <div className={Styles.content}>
            <h1 className= {Styles.title}>See what's happening  </h1>
            <h2 className={Styles.text}>Join Hackatweet today.</h2>
            <div className={Styles.buttons}>

              <div className={Styles.signupButton}>
              <button id="register" onClick={() => handleRegister()}>Sign Up</button>
              <input type="text" placeholder="Firstname" id="signupFirstname" onChange={(e) => setSignupFirstname (e.target.value)} value={signupFirstname}/>
              <input type="text" placeholder= "Username" id="signupUsername" onChange={(e) => setSignupUsername (e.target.value)} value={signupUsername}/>
              <input type="password" placeholder= "Password" id="signupPassword" onChange={(e) => setSignupPassword (e.target.value)} value={signupPassword}/>
              </div>

              <div className={Styles.signinButton}>
              <button id= "connection" onClick={() => handleConnection()}>Sign In</button>
              <input type="text" placeholder="Username" id="signinUsername" onChange={(e) => setSigninUsername (e.target.value)} value={signinUsername}/>
              <input type="password" placeholder="Password" id="signinPassword" onChange={(e) => setSigninPassword (e.target.value)} value={signinPassword}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;