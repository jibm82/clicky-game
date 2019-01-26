import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="row flex-nowrap justify-content-between align-items-center w-100">
        <div className="col-md-4">
          <a href="/">Clicky Game</a>
        </div>
        <div className="col-md-4">
          {props.score === 0 ? "Click an image to begin!" : ""}
        </div>
        <div className="col-md-4">
          Score: {props.score} | Top Score: {props.topScore}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
