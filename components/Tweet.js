import React, { useState } from "react";
import styles from "../styles/Tweet.module.css";

export default function Tweet() {

    const [tweet, setTweet] = useState('')
    let maxCarac = tweet.length > 280 ? {color:'red'} : {color:'white'}


  return (
    <div className={styles.containerTweet}>
      <div className={styles.input}>
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
        <button className={styles.buttonTweet}>Tweet</button>
      </div>
    </div>
  );
}
