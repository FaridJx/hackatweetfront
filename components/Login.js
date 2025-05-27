import {React, useState} from "react";
import styles from "../styles/Login.module.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

export default function () {

    const [isOpenSignUp, setIsOpenSignUp] = useState(false)
    const [isOpenSignIn, setIsOpenSignIn] = useState(false)

    function handleOpenSignUp (){
        setIsOpenSignUp(!isOpenSignUp)
    }

    function handleOpenSignIn (){
        setIsOpenSignIn(!isOpenSignIn)
    }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftLogin}></div>
        <section className={styles.rightLogin}>
          <div className={styles.rightZone}>
            <div>
              <img src="../assets/Logo_of_Twitter.svg.png" height={30} />
            </div>
            <div>
              <h1 className={styles.title}>See what's happening</h1>
            </div>
            <div>
              <div>
                <h3 className={styles.joinSentence}>Join hackatweet today.</h3>
                <button className={styles.btnLogin} onClick={handleOpenSignUp}>Sign up</button>
              </div>
              <div>
                <h4>Already have an account ?</h4>
                <button className={styles.btnLogin} onClick={handleOpenSignIn}>Sign in</button>
              </div>
            </div>
          </div>
        </section>
        {isOpenSignUp && <SignUp handleOpen={handleOpenSignUp}/>}
        {isOpenSignIn && <SignIn handleOpen={handleOpenSignIn}/>}
      </main>
    </div>
  );
}
