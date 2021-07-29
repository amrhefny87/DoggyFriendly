import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";

export const auth = {
  register(user) {
    return axios.post(ENDPOINT_PATH + "register", user);
  },
  login(user) {
    return axios.post(ENDPOINT_PATH + "login", user);
  },
  meInfo() {
    return axios.get(ENDPOINT_PATH + "authuser");
  },
  logout() {
    return axios.post(ENDPOINT_PATH + "logout")
  },
  uploadImage(image) {
    return axios.post(ENDPOINT_PATH + "uploadImage", image)
  },
  otherUser(id) {
    return axios.get(ENDPOINT_PATH + "user/" + id)
  }
};
