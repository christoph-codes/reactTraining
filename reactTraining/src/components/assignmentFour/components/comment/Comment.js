import React from "react";
import "./Comment.scss";

export default function Comment(props) {
  return (
    <div className="Comment" onClick={() => {props.clicked(); props.onClick()}}>
      <div className="card">
        <h1>{props.data.name}</h1>
        <h6>{props.data.manager} is your manager</h6>
        <p>{props.data.body}</p>
        <small>- {props.data.email}</small>
      </div>
    </div>
  );
}
