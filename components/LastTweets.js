import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function LastTweets(props) {
  const [lastsTweet, setLastTweet] = useState([]);
  const user = useSelector((state) => state.users.value);
  const token = user.token
  console.log(user);
  

  const [likedTweets, setLikedTweets] = useState(user.likedTweets)
  console.log(user.likedTweets);
  

  const toggleLike = async (tweetId) => {

    fetch(`http://localhost:3000/tweets/like/${token}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({tweet: tweetId})
    })
    .then(response => response.json())
    .then(data => {
      if(data.result){
        setLikedTweets((prevLiked) =>
          prevLiked.includes(tweetId)
            ? prevLiked.filter((id) => id !== tweetId)
            : [...prevLiked, tweetId]
          );
        
        props.onRefresh();
      }

    })
  };

  useEffect(() => {
    fetch("http://localhost:3000/tweets")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setLastTweet(data)
        }
      });
  }, [props.refresh]);

  const tweets = lastsTweet.map((e, key) => {
    const isLiked = likedTweets?.includes(e._id);
  
    return (
      <div key={key} className={styles.tweetContainer}>
        <div className={styles.userInfo}>
          <img
            className={styles.imgAvatar}
            src="../assets/avataaars.png"
            alt="avatar girl"
          />
          <p className={styles.userName}>{e.user.firstname}</p>
          <p className={styles.userTag}>@{e.user.username}</p> <p>- {e.time}</p>
        </div>
        <div className={styles.tweetMsg}>{e.message}</div>
        <div className={styles.judge}>
          <div className={styles.likeContainer}>
            <FontAwesomeIcon
              icon={faHeart}
              className={styles.likes}
              style={{ color: isLiked ? 'red' : 'white' }}
              onClick={() => toggleLike(e._id)}
            />
            <p>{e.likedBy.length}</p>
          </div>
          {user.token === e.user.token && (
            <div>
              <FontAwesomeIcon icon={faTrash} className={styles.trash} />
            </div>
          )}
        </div>
      </div>
    );
  });

  return <div>{tweets}</div>;
}
