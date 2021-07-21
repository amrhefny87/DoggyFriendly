import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";

export default {
  register(user) {
    return axios.post(ENDPOINT_PATH + "register", user);
  },
  login(email, password) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH + "login", user);
  }
    };