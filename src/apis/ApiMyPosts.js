import axios from "axios";

const url = "http://127.0.0.1:8000/api/myPosts";

export const apimyPosts = {
    getAll() {
        return axios.get(url);
    },
    create(form) {
        return axios.post(url, form);
    },
    editEvent(id, form) {
        return axios.patch(url + "/" + id, form);
    },
    delete(id) {
        return axios.delete(url + "/" + id);
    },
    myPosts(id){
        return axios.get(url + "/" + id);
    }
};