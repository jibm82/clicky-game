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
          <span>Score: {props.score}</span>
          <span className="d-none d-md-inline"> | </span>
          <span className="d-block d-md-inline">
            Top Score: {props.topScore}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
