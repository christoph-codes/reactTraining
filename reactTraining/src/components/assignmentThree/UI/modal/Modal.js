import React, { Fragment } from "react";
import "./Modal.scss";
import Backdrop from "../backdrop/Backdrop";

export default function Modal(props) {
  return (
    <Fragment>
      <Backdrop clicked={props.close} />
      <div className="Modal">{props.children}</div>
    </Fragment>
  );
}
