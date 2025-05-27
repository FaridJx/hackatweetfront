import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Tweet from './Tweet';
import LastTweets from './LastTweets';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1> */}
        <div id='left' className={styles.left}>
          <div className={styles.leftContainer}>
            <div><img
                className={styles.leftHeader}
                src="/assets/Logo_of_Twitter.svg.png"
                alt="Twitter logo"
              /></div>
            <div className={styles.leftFooter}>
              <div><img/></div>
              <div>
                <h4>John</h4>
              </div>
            </div>
          </div>
        </div>
        <div id='center' className={styles.center}>
          <div className={styles.centerHeader}>
            <h3>Home</h3>
            <Tweet/>
          </div>
          <div>
            <LastTweets/>
          </div>
        </div>
        <div id='right' className={styles.right}></div>
      </main>
    </div>
  );
}

export default Home;
