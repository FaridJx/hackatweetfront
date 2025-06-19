import React, {useState, useEffect} from 'react'
import styles from '../styles/Trends.module.css'

export default function Trends(props) {

    const [trends, setTrends] = useState([])
    const trendsObject = {}

     useEffect( () =>{
      fetch("http://localhost:3000/trends")
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setTrends(data);
            }
          });
      }, [props.onRefresh]);

      for (let i = 0; i < trends.length; i++) {
                const tweet = trends[i].hashtag;
                trendsObject[tweet] ? trendsObject[tweet]+=1 : trendsObject[tweet]=1            
      }

      const hastagList = Object.keys(trendsObject).map((e, key) => {
        return (
            <div>
                <h4>{e}</h4>
                <p>{trendsObject[e]} Tweets</p>
            </div>
        )
    })
  return (
    <div className={styles.hashtagContainer}>{hastagList}</div>
  )
}
