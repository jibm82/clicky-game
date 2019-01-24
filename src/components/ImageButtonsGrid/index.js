import React from "react";
import "./style.css";
import ImageButton from "../ImageButton";

class ImageButtonsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.initialImages()
    };
  }

  initialImages() {
    const images = [];
    for (let i = 1; i <= 16; i++) {
      images.push({
        clicked: false,
        url: `https://via.placeholder.com/400x400.png?text=${i}`
      });
    }
    return images;
  }

  handleClick(i) {
    let images = this.state.images.slice();
    images[i].clicked = true;
    images = images.sort(function() {
      return 0.5 - Math.random();
    });
    this.setState({ images });
  }

  renderImageButton(i) {
    return (
      <ImageButton
        key={i}
        url={this.state.images[i].url}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="image-buttons-grid">
        {this.state.images.map((image, index) => {
          return this.renderImageButton(index);
        })}
      </div>
    );
  }
}

export default ImageButtonsGrid;
