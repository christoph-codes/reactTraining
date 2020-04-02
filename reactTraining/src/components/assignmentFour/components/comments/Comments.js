import React, { useEffect, useState } from "react";
import "./Comments.scss";
import Comment from "../comment/Comment";
import axios from "axios";
import Modal from "../modal/Modal";
import NewComment from "../newComment/NewComment";

export default function Comments(props) {
  let [comments, setComments] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("/comments")
      .then(record => {
        const comments = record.data;
        const updatedComments = comments.map(comment => {
          return {
            ...comment,
            manager: "Christoph"
          };
        });
        setComments(updatedComments);
        // console.log(record);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  }, [comments, selectedCommentId]);

  const sendComment = id => {
    setSelectedCommentId(id);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const theComments = comments.map(rec => {
    return (
      <Comment
        data={rec}
        key={rec.id}
        clicked={() => sendComment(rec.id)}
        onClick={toggleModal}
      />
    );
  });

  return (
    <div className="Comments">
      <NewComment />
      {theComments}
      {showModal && (
        <Modal
          show={showModal}
          id={selectedCommentId}
          close={toggleModal}
        />
      )}
    </div>
  );
}
