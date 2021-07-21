import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";
export default ({
    namespaced: true,
    state: {
        token: null,
        user: null,
        
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        }
    },
    actions: {
        async login ({ dispatch },credentials) {
            let res = await axios.post(ENDPOINT_PATH + "login", credentials);
            dispatch("attempt", res.data.token)
        },
        async attempt ({ commit }, token) {
            commit("SET_TOKEN", token)
        }
    },
    
})