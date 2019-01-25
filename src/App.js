import React, { Component } from "react";
import "./App.css";
import ImageButtonsGrid from "./components/ImageButtonsGrid";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      topScore: 0
    };
  }

  increaseScore() {
    const score = this.state.score + 1;
    const topScore = Math.max(this.state.topScore, score);
    this.setState({ score, topScore });
  }

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <ImageButtonsGrid
          increaseScore={() => {
            this.increaseScore();
          }}
        />
      </div>
    );
  }
}

export default App;
