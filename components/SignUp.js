import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Home.module.css';



function SignUp() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [signupFirstname, setSignupFirstname] = useState('');
    const [signupUsername, setSignupUsername] = useState('');
    const [signupPassword, setSignupPassword] = useState('');


    const handleRegister = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ firstname: signupFirstname, username: signupUsername, password: signupPassword }),
        }).then(response => response.json())
            .then(data => {
                if (data.result) {
                    //ou (data)
                    dispatch(login({ firstname: signupFirstname, username: signupUsername, token: data.token }));
                    setSignupUsername('');
                    setSignupPassword('');
                    setSignupFirstname('');
                    // setIsModalVisible(false)
                }
            });
    };




    return (

        <div className={styles.signupButton}>
            <button id="register" onClick={() => handleRegister()}>Sign Up</button>
            <input type="text" placeholder="Firstname" id="signupFirstname" onChange={(e) => setSignupFirstname(e.target.value)} value={signupFirstname} />
            <input type="text" placeholder="Username" id="signupUsername" onChange={(e) => setSignupUsername(e.target.value)} value={signupUsername} />
            <input type="password" placeholder="Password" id="signupPassword" onChange={(e) => setSignupPassword(e.target.value)} value={signupPassword} />
        </div>

    );
}

export default SignUp;