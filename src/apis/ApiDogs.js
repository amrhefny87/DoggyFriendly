import axios from 'axios';

export const get = (url) => {
  return axios.get(url)
}

const url = "http://127.0.0.1:8000/api/postdogs"

export const apidogs =  {
  getAll() {
    return get(url)
  },
  create(form) {
    return axios.post(url, form)
  },
  editEvent(id, form) {
    return axios.put(url+"/"+id, form)
},
delete(id) {
  return axios.delete(url+"/"+id)
}
}