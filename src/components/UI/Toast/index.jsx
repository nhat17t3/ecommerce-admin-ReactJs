import React from "react";
import Toast from 'react-bootstrap/Toast'

const NewToast = (props) => {
  
  return (
    <Toast className="d-inline-block m-1" bg="primary" onClose={props.onClose} show={props.show} delay={3000} autohide>
    <Toast.Header>
      <img
        src="holder.js/20x20?text=%20"
        className="rounded me-2"
        alt="logo"
      />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header>
    <Toast.Body>{props.message}</Toast.Body>
  </Toast>
  
  );
};

export default NewToast;