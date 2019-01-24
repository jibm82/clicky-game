import React from "react";
import "./style.css";

function ImageButton(props) {
  return (
    <div className="image-button-wrapper">
      <button className="image-button" onClick={props.onClick}>
        <img className="img-fluid" src={props.url} alt="" />
      </button>
    </div>
  );
}

export default ImageButton;
