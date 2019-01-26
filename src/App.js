import React, { Component } from "react";
import "./App.css";
import ImageButtonsGrid from "./components/ImageButtonsGrid";
import Navbar from "./components/Navbar";
import Spotlight from "./components/Spotlight";

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

  resetScore() {
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Spotlight />
        <ImageButtonsGrid
          increaseScore={() => this.increaseScore()}
          resetScore={() => this.resetScore()}
        />
      </div>
    );
  }
}

export default App;
