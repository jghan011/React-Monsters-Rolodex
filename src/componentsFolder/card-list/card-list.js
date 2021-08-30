import React from "react";
import "./card-list.styles.css";
import { Card } from "./card.component";
export const Cardlist = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {" "}
      {props.monsters.map((monsterOne) => (
        <Card key={monsterOne.id} monsters={monsterOne} />
      ))}
    </div>
  );
};
