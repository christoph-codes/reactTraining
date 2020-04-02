import React from "react";
import "./Comment.scss";

export default function Comment(props) {
  return (
    <div className="Comment" >
      <div className="card">
        <h1>{props.data.name}</h1>
        <h6>{props.data.manager} is your manager</h6>
        <p>{props.data.body}</p>
        <small>- {props.data.email}</small>
        <button onClick={() => {props.clicked(); props.onClick()}} className="btn">Open</button>
      </div>
    </div>
  );
}
