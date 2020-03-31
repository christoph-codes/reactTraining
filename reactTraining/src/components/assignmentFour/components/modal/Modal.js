import React, { useEffect, useState } from "react";
import "./Modal.scss";
import axios from "axios";

export default function Modal(props) {
  const [comment, setComment] = useState({});
  useEffect(() => {
    if (props.id) {
      axios
        .get("https://jsonplaceholder.typicode.com/comments/" + props.id)
        .then(record => {
          setComment(record.data);
        // console.log(record.data.name)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },[comment]);
  return (
    <div className="Modal">
      <h1>{comment.name}</h1>
      <p>{comment.body}</p>
      <button>Close</button>
    </div>
  );
}
