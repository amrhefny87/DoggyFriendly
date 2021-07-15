import axios from 'axios';

const url = "http://localhost:3000/posts"

export const apidogs =  {
  getAll() {
    return axios.get(url)
  },
  create(form) {
    return axios.post(url, form)
  },
  editEvent(id, form) {
    return axios.patch(url+"/"+id, form)
},
delete(id) {
  return axios.delete(url+"/"+id)
}
}