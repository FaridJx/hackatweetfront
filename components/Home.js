import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import { logout } from "../reducers/users";
import { useRouter } from 'next/navigation';
// import Link from "next/link"


function Home() {
  const user = useSelector((state) => state.users.value);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const dispatch = useDispatch()
  const router = useRouter()

  const handleRefresh = () => {
    setRefreshTrigger((prev) => !prev); // toggle = forcer le useEffect à se relancer
  };

  const handleLogout = () => {
    dispatch(logout())
    router.push('/');
  }

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
                width={50}
                height={50}
                src="../assets/Logo hackatweet.webp"
                alt="Twitter logo"
              />
            </div>
            <div className={styles.leftFooter}>
              <div>
                <h4>{user.firstname}</h4>
              </div>
              <div>
                <span className={styles.disconnectButton} onClick={handleLogout}>Disconnect</span>
              </div>
            </div>
          </div>
        </div>
        <div id="center" className={styles.center}>
          <div className={styles.centerHeader}>
            <h3>Home</h3>
            <Tweet onTweet={() => setRefreshTrigger((prev) => prev + 1)} />
          </div>
          <div className={styles.tweetContainer}>
            <LastTweets refresh={refreshTrigger} onRefresh={handleRefresh} />
          </div>
        </div>
        <div id="right" className={styles.right}>
          <div className={styles.rightHeader}>
            <h3>Trends</h3>
          </div>
          <div>
            <Trends refresh={refreshTrigger} onRefresh={handleRefresh} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
