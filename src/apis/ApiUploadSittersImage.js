import axios from "axios";

const url = "http://127.0.0.1:8000/api/uploadSittersImage";

export const ApiUploadSittersImage = {
  postImage(image) {
    return axios.post(url, image)
  }
};