import React, { useState } from "react";
import styles from "../styles/Sign.module.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/users";
import { useRouter } from "next/router"

export default function SignIn(props) {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
      fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: signInUsername, password: signInPassword})
    })
    .then(response => response.json())
    .then(data => {
      if(data.result){
        dispatch(login({username: data.username, firstname: data.firstname, token: data.token}))
        router.push('/home')
      }
    })
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={props.handleOpen}></div>
      <div className={styles.modalContent}>
        <div>
          <img src="../assets/Logo_of_Twitter.svg.png" height={35} />
        </div>
        <div>
          <h2>Create your hackatweet account</h2>
        </div>
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          />
          <button className={styles.button} onClick={() => handleLogin()}>SignUp</button>
        </div>
      </div>
    </div>
  );
}
