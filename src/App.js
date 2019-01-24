import React, { Component } from "react";
import "./App.css";
import ImageButtonsGrid from "./components/ImageButtonsGrid";

class App extends Component {
  onClickHandler = index => {
    console.log(index);
  };
  render() {
    return (
      <div className="App">
        <ImageButtonsGrid
          numbers={[0, 1, 2]}
          onClickHandler={this.onClickHandler}
        />
      </div>
    );
  }
}

export default App;
