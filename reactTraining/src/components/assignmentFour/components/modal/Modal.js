import React, { useEffect, useState } from "react";
import "./Modal.scss";
import axios from "axios";
import closeIcon from '../../../../assets/close.svg'

export default function Modal(props) {
  const [comment, setComment] = useState({});

  useEffect(() => {
    if (props.id) {
      if(!comment || (comment && comment !== props.id)) {
        axios
        .get("/comments/" + props.id)
        .then(record => {
          setComment(record.data);
        // console.log(record.data.name)
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  },[comment, props.id]);

  const deleteComment = id => {
      axios
        .delete("/comments/" + id)
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
  };

  return (
    <div className="Modal">
      <img src={closeIcon} alt="" onClick={props.close} />
      <h1>{comment.name}</h1>
      <p>{comment.body}</p>
      <p>{comment.email}</p>
      <p>{props.id}</p>
      <button className="btn" onClick={() => deleteComment(props.id)}>Delete</button>
    </div>
  );
}
