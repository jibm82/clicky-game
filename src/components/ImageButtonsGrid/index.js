import React from "react";
import "./style.css";
import ImageButton from "../ImageButton";
import ImageService from "../../services/ImageService";
import Notifications from "../Notifications";

class ImageButtonsGrid extends React.Component {
  constructor(props) {
    super(props);
    this.imageService = new ImageService();
    this.notifications = React.createRef();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    this.loadNewImageSet();
  }

  loadNewImageSet() {
    this.destroyImageSet();

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

  destroyImageSet() {
    this.setState({ images: Array(16).fill({ url: "" }) });
  }

  handleClick(i) {
    const images = this.state.images.slice();
    if (!images[i].clicked) {
      images[i].clicked = true;
      this.handleSuccessfulClick(images);
    } else {
      this.notifications.current.error();
      this.props.resetScore();
      this.loadNewImageSet();
    }
  }

  handleSuccessfulClick(images) {
    this.props.increaseScore();
    if (images.some(image => !image.clicked)) {
      this.setState({ images });
      this.reorderImages();
      this.notifications.current.success();
    } else {
      this.loadNewImageSet();
      this.notifications.current.newImageSetLoaded();
    }
  }

  reorderImages() {
    let images = this.state.images.slice();

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
      <>
        <div className="container image-buttons-grid">
          {this.state.images.map((image, index) => {
            return this.renderImageButton(index);
          })}
        </div>
        <Notifications ref={this.notifications} />
      </>
    );
  }
}

export default ImageButtonsGrid;
