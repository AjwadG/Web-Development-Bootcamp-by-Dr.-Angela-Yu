import React from "react";
import Avatar from "./Avatar";
import Deatil from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Deatil info={props.tel} />
        <Deatil info={props.email} />
      </div>
    </div>
  );
}

export default Card;
