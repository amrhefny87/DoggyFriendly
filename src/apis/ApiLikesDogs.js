import axios from "axios";

const url = "http://127.0.0.1:8000/api/likesdogs";

export const apilikesdogs = {
  getAll() {
    return axios.get(url);
  },
  like(request) {
    return axios.post(url, request).then(res => {
      console.log(res)
    });
  },
  
  
  dislike(id) {
    return axios.delete(url + "/" + id);
}
}
