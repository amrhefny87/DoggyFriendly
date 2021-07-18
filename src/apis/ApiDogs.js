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
<<<<<<< HEAD
  create() {
    axios.post(url, "hola")
  }
}

=======
  editEvent(id, form) {
    return axios.patch(url+"/"+id, form)
},
delete(id) {
  return axios.delete(url+"/"+id)
}
}
>>>>>>> 76401adf8a6317e20d162254c76ca4e3117649c3
