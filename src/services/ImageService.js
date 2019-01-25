import axios from "axios";

const IMAGE_LIST_URL = "https://picsum.photos/list";
const IMAGE_BASE_URL = "https://picsum.photos/300/300?image=";

class ImageService {
  getRandomImageUrls() {
    return new Promise((resolve, reject) => {
      axios
        .get(IMAGE_LIST_URL)
        .then(response => {
          const imageIds = response.data.map(image => image.id);

          resolve(this.extractRandomImageUrls(imageIds));
        })
        .catch(err => reject(err));
    });
  }

  extractRandomImageUrls(imageIds) {
    const IMAGES_TO_RETRIEVE = 16;
    const randomImageUrls = [];
    const startingIndex = parseInt(
      Math.random() * (imageIds.length - IMAGES_TO_RETRIEVE)
    );

    for (let i = startingIndex; i < startingIndex + IMAGES_TO_RETRIEVE; i++) {
      randomImageUrls.push(`${IMAGE_BASE_URL}${imageIds[i]}`);
    }

    return randomImageUrls;
  }
}

export default ImageService;
