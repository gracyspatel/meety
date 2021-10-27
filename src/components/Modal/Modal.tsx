import React, { Component } from "react";
import "./Modal.scss";

interface modalProps {
  component: JSX.Element;
}

const Modal = (props: modalProps) => {
  return (
    <div className='modal-outer'>
      <div className='modal'>
        <img
          src='https://img.icons8.com/windows/32/000000/macos-close.png'
          className='close'
        />
        <div>{props.component}</div>
      </div>
    </div>
  );
};

export default Modal;
