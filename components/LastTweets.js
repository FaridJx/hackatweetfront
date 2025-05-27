import React, { useState } from "react";
import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function LastTweets() {

    // const [like, setLike] = useState(false)
    // let style = like ? style={color: "red"} : {color: "white"}
    const data = [
        {
        name: "Fani",
        tag: "@LovyDeLaVida",
        time: "3 minutes",
        msg: "Lorem ipsum dolor sit amet",
        },
        {
        name: "Fariha",
        tag: "@majestyDeLaNoche",
        time: "12 hours",
        msg: "Lorem ipsum dolor sit amet dolor sit amet dolor sit amet",
        },
        {
        name: "Fasouspi",
        tag: "@adalynoDeNintendo",
        time: "5 days",
        msg: "Lorem ipsum dolor sit amet",
        },
    ];

  const tweets = data.map((e, key) => {
    const [like, setLike] = useState(false)
    let style = like ? style={color: "red"} : {color: "white"}

    return (
      <div className={styles.tweetContainer} >
        <div className={styles.userInfo}>
          <img
            className={styles.imgAvatar}
            src="../assets/avataaars.png"
            alt="avatar girl"
          />
          <p className={styles.userName}>{e.name}</p>
          <p className={styles.userTag}>{e.tag}</p> <p>- {e.time}</p>
        </div>
        <div className={styles.tweetMsg}>{e.msg}</div>
        <div className={styles.judge}>
          <div className={styles.likeContainer}>
            <FontAwesomeIcon icon={faHeart} className={styles.likes} style={style} onClick={() => setLike(!like)}/>
            <p>2</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTrash} className={styles.trash}/>
          </div>
        </div>
      </div>
    );
  });

  return <div>{tweets}</div>;
}
