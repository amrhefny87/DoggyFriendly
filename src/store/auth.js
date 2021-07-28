import {auth} from '@/logic/auth'

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
            let res = await auth.login(credentials)

            dispatch("attempt", res.data.token)
        },
        async attempt ({ commit,state }, token) {
            if(token){
                commit("SET_TOKEN", token)
            }
            if(!state.token){
            return
            }
            try {
                let res = await auth.meInfo()
                commit("SET_USER", res.data)

            } catch(e) {
                commit("SET_TOKEN", null)
                commit("SET_USER", null)
            }

        },
        signOut ( { commit } ) {
            return auth.logout().then(() => {
                commit("SET_TOKEN", null)
                commit("SET_USER", null)
            })
        }
    },
    
})
