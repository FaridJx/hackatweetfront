import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function LastTweets() {
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

  const tweets = data.map((e) => {
    return (<div>
      <div>
        <img src="../assets/avataaars.png" alt="avatar girl" />
        <p>{e.name}</p>
        <p>{e.tag}</p> - <p>{e.time}</p>
      </div>
      <div>{e.msg}</div>
      <div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <p>2</p>
        </div>
        <div>
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </div>);
  });

  return (
  <div>

    {tweets}
  </div>
  );
}
