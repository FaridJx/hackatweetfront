import React from "react";
import styles from "../styles/Sign.module.css";

export default function SignIn(props) {
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
          <input className={styles.input} type="text" placeholder="Username" name="username" />
          <input className={styles.input} type="password" placeholder="Password" name="password" />
          <button className={styles.button}>SignUp</button>
        </div>
      </div>
    </div>
  );
}
