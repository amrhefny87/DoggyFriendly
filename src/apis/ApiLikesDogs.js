import axios from "axios";

const url = "http://127.0.0.1:8000/api/likesdogs";

export const apilikesdogs = {
  getAll() {
    return axios.get(url);
  },
  like(id) {
    return axios.post(url).then(res => {
      console.log(res)
    });
  },
  
  
  delete(id) {
    return axios.delete(url + "/" + id);
  },
};
