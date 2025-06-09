import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Tweet.module.css";

export default function Tweet(props) {

  console.log(props);
  
    const [tweet, setTweet] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [validMessage, setValidMessage] = useState('')
    const [notValid, setNotValid] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const user = useSelector((state) => state.users.value);
    let maxCarac = tweet.length > 280 ? { color:'red' } : { color:'white' }


    const handleTweet = () => {
          fetch(`http://localhost:3000/tweets/newTweet/${user.token}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({message: tweet})
        })
        .then(response => response.json())
        .then(data => {
          if(data.result){
            props.onTweet();
            setValidMessage('Le tweet a bien été enregistré')
            setNotValid(false)
            setIsValid(true)
            setTweet('')
          } else if(!data.result || tweet.length > 280 || tweet.length === 0) {
            setIsValid(false)
            setNotValid(true)
            setErrorMessage(data.error)
          }
        })
    };


  return (
    <div className={styles.containerTweet}>
      <div className={styles.input}>
      {notValid && <p className={styles.error}>{errorMessage}</p>}
      {isValid && <p className={styles.valid}>{validMessage}</p>}
        <input
          className={styles.inputTweet}
          type="text"
          id="tweet"
          name="tweet"
          placeholder="What's Up ?"
          onChange={(e) => setTweet(e.target.value)}
          value={tweet}
        />
      </div>
      <div className={styles.validatonTweet}>
        <p style={maxCarac}>{tweet.length}/280</p>
        <button className={styles.buttonTweet} onClick={() => handleTweet()}>Tweet</button>
      </div>
    </div>
  );
}
