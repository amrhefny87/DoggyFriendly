import auth from "../logic/auth";

export default ({
    state: {
        token: null,
        user: null,
        
    },
    mutations: {
        
    },
    actions: {
        async login (credentials) {
            try {
                await auth.login(credentials);
                this.$router.push("/");
              } catch (error) {
                this.error = true;
              }
              
        }

    },
    
})