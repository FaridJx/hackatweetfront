import React from 'react'

export default function SignIn() {
  return (
    <div className={styles.modal}>
          <div className={styles.overlay} onClick={props.handleOpenSignIn}></div>
          <div className={styles.modalContent}>
            <div>
              <img src="../assets/Logo_of_Twitter.svg.png" height={35} />
            </div>
            <div>
              <h2>Create your hackatweet account</h2>
            </div>
            <div className={styles.form}>
              <input type="text" placeholder="Username" name="username" />
              <input type="password" placeholder="Password" name="password" />
              <button>SignUp</button>
            </div>
          </div>
        </div>
  )
}
