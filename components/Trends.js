import React, {useState, useEffect} from 'react'
import styles from '../styles/Trends.module.css'

export default function Trends(props) {

    const [trends, setTrends] = useState([])
    const objets = {}

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
                objets[tweet] ? objets[tweet]+=1 : objets[tweet]=1            
      }
      
      const hastagList = Object.keys(objets).map((e, key) => {
        return (
            <div>
                <h4>{e}</h4>
                <p>{objets[e]} Tweets</p>
            </div>
        )
    })
  return (
    <div className={styles.hashtagContainer}>{hastagList}</div>
  )
}
