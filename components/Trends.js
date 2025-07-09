import React, {useState, useEffect} from 'react'
import styles from '../styles/Trends.module.css'

export default function Trends(props) {

    const [trends, setTrends] = useState([])
    const trendsObject = {}

     useEffect(() =>{
       fetch("http://localhost:3000/trends")
          .then((response) => response.json())
          .then((data) => {
            if (data) {
              setTrends(data);
            }
          });
      }, [props.refresh]);
      console.log(trends);
      


    const hastagList = trends.map((e, key) => {
        return (
            <div>
                <h4>{e.hashtag}</h4>
                <p>{e.counter} Tweets</p>
            </div>
        )
    })
  return (
    <div className={styles.hashtagContainer}>{hastagList}</div>
  )
}
