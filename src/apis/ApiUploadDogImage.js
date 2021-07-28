import axios from "axios";

const url = "http://127.0.0.1:8000/api/uploadDogImage";

export const ApiUploadDogImage = {
  postImage(image) {
    return axios.post(url, image)
  }
};