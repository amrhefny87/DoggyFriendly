<template>
<div>
  <Header />
  <div class="login">
    <template v-if="authenticated">
      <div>
        <h1>hola</h1>
        <button @click.prevent="signOut">adios</button>
      </div>
    </template>
    <h1 class="title">Login in the page</h1>
    <form action class="form" @submit.prevent="submit">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="form.email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="form.password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
    <div class="d-flex align-items-center justify-content-center">
    <p class="msg">¿Do you have an account?
      <router-link to="/register">Register for free</router-link>
    </p>
    </div>
  </div>
    </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex"
import Header from "@/components/Header.vue";


export default {
  name: "Login",
  components: {Header},
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    error: false
  }),
  methods: {
    ...mapActions({
      login: 'auth/login',
      signOutAction: "auth/signOut"
    }),
    signOut() {
      this.signOutAction().then(()=> {
         /*this.$router.replace({
         name: "login"
       }) */
      })
    },
    submit() {
     this.login(this.form).then(() => {
        /*this.$router.replace({
         name: "Home"
       }) */
     })
    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  }
}

</script>

<style scoped>
.error {
  color: red
}
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 300px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
.form-label:first-of-type {
    margin-top: 0rem;
  }
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-input:focus {
    outline: 0;
    border-color: #1ab188;
  }
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
.form-submit:hover {
    background: #0b9185;
  }
</style>