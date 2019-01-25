import React from "react";
import "./style.css";
import ImageButton from "../ImageButton";
import ImageService from "../../services/ImageService";

class ImageButtonsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.imageService = new ImageService();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this.imageSet();
  }

  imageSet() {
    this.imageService
      .getRandomImageUrls()
      .then(imageUrls => {
        const images = [];

        imageUrls.forEach(url => {
          images.push({
            clicked: false,
            url: url
          });
        });

        this.setState({ images });
      })
      .catch(err => console.log(err));
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
