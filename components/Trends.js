import React from 'react'
import styles from '../styles/Trends.module.css'

export default function Trends() {

    const data = [
        {hastag: "pilon"},
        {hastag: "fiesta"},
        {hastag: "lcdFinal"},
        {hastag: "rollandGarros"},
        {hastag: "Fifa"},
    ]


    const hastagList = data.map((e, key) => {
        return (
            <div>
                <h4>#{e.hastag}</h4>
                <p>2 Tweets</p>
            </div>
        )
    })
  return (
    <div className={styles.hashtagContainer}>{hastagList}</div>
  )
}
