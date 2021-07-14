import axios from 'axios';

const url = "http://127.0.0.1:8000/api/postdogs"

export const apidogs =  {
  getAll() {
    return axios.get(url)
  },
}