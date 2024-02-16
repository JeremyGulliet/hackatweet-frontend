import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Home.module.css';



function SignIn() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const [signinUsername, setSigninUsername] = useState('');
    const [signinPassword, setSigninPassword] = useState('');


    const handleConnection = () => {
        fetch('http://localhost:3000/users/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: signinUsername, password: signinPassword }),
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.result) {
                    dispatch(login({ username: signinUsername, token: data.token }));
                    setSigninUsername('');
                    setSigninPassword('');
                    // setIsModalVisible(false)
                }
            });
    };




    return (

        <div className={styles.signinButton}>
            <button id="connection" onClick={() => handleConnection()}>Sign In</button>
            <input type="text" placeholder="Username" id="signinUsername" onChange={(e) => setSigninUsername(e.target.value)} value={signinUsername} />
            <input type="password" placeholder="Password" id="signinPassword" onChange={(e) => setSigninPassword(e.target.value)} value={signinPassword} />
        </div>

    );
}

export default SignIn;