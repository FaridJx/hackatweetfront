import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";

function Home() {

  const user = useSelector((state) => state.users.value);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  return (
    <div>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
        <div id="left" className={styles.left}>
          <div className={styles.leftContainer}>
            <div>
              <img
                className={styles.leftHeader}
                src="/assets/Logo_of_Twitter.svg.png"
                alt="Twitter logo"
              />
            </div>
            <div className={styles.leftFooter}>
              <div>
                <img />
              </div>
              <div>
                <h4>{user.firstname}</h4>
              </div>
            </div>
          </div>
        </div>
        <div id="center" className={styles.center}>
          <div className={styles.centerHeader}>
            <h3>Home</h3>
            <Tweet onTweet={() => setRefreshTrigger(prev => prev + 1)}/>
          </div>
          <div className={styles.tweetContainer}>
            <LastTweets refresh={refreshTrigger}/>
          </div>
        </div>
        <div id="right" className={styles.right}>
          <div className={styles.rightHeader}>
            <h3>Trends</h3>
          </div>
          <div>
            <Trends />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
