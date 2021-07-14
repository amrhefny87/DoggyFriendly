import axios from 'axios';

const url = "http://127.0.0.1:8000/api/postsitters"

export const apisitters =  {
  getAll() {
    return axios.get(url)
  },
}