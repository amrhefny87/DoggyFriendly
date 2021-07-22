import axios from "axios";

const ENDPOINT_PATH = "http://127.0.0.1:8000/api/";
export default ({
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        authenticated (state) {
            return state.token && state.user
        },
        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER (state, data) {
            state.user = data
        }
    },
    actions: {
        async login ({ dispatch },credentials) {
            let res = await axios.post(ENDPOINT_PATH + "login", credentials);
            dispatch("attempt", res.data.token)
        },
        async attempt ({ commit }, token) {
            commit("SET_TOKEN", token)

        try {
            let responsive = await axios.get(ENDPOINT_PATH + "users")
            localStorage.setItem("token", token)

            commit("SET_USER", responsive.data)
        } catch (e) {
            localStorage.removeItem("token")
            commit("SET_TOKEN", null)
            commit("SET_USER", null)

        }
        }
    },
    
})
//