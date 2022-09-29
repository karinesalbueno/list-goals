import React from "react";
import './modal.css'

const Modal = (props) => {

    return (
      <div className="background">
        <div className="modalContainer">
            <h2>Poxa, que pena...</h2>
            <p>{props.message}</p>
            <button className="buttonModal" onClick={props.onClick}>Ok 👍  </button>
       
        </div>
        </div>
    )

}

export default Modal;