import React, { useState } from "react";
import styles from "../styles/Sign.module.css"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/users";
import { useRouter } from "next/router"

export default function SignUp(props) {

  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false)
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
      fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({firstname: signUpFirstname, username: signUpUsername, password: signUpPassword})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      
      if(data.result){
        dispatch(login({username: data.newDoc.username, firstname: data.newDoc.firstname, token: data.newDoc.token}))
        router.push('/home')
      } else{
        setErrorMsg(true)
      }
    }) .catch(err => {
    console.error('Fetch error:', err);
  });
  };
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={props.handleOpen}></div>
      <div className={styles.modalContent}>
        <div>
          <img src="../assets/Logo_of_Twitter.svg.png" height={35} />
        </div>
        <div className={styles.title}>
        {errorMsg && (<p className={styles.errorMsg}>Remplissez le formulaire afin de vous inscrire. </p>)}
          <h2>Create your hackatweet account</h2>
        </div>
        <div className={styles.form}>
          <input className={styles.input} type="text" placeholder="Firstname" name="firstname" onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}/>
          <input className={styles.input} type="text" placeholder="Username" name="username" onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}/>
          <input className={styles.input} type="password" placeholder="Password" name="password" onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}/>
          <button className={styles.button} onClick={() => handleLogin()}>SignUp</button>
        </div>
      </div>
    </div>
  );
}
