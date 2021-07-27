<template>
  <div>
    <Header />
    <div class="login">
      <h2 class="title">Login</h2>

      <form action class="form" @submit.prevent="submit">
        <label class="form-label" for="#email">Email:</label>
        <input
          v-model="form.email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        />
        <label class="form-label" for="#password">Password:</label>
        <input
          v-model="form.password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        />
        <p v-if="error" class="error">
          Please, introduce you mail o password correctly
        </p>
        <input class="form-submit" type="submit" value="Login" />
        <div class="d-flex align-items-center justify-content-center">
        <p class="msg mt-5">
          ¿Do you have an account? <br>
          <router-link to="/register">Register for free</router-link>
        </p>
      </div>
      </form>
      
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Logged from "./Logged";

export default {
  name: "Login",
  components: { Header, Logged, Footer },
  data: () => ({
    form: {
      email: "",
      password: "",
    },
    error: false,
  }),
  methods: {
    ...mapActions({
      login: "auth/login",
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        /*this.$router.replace({
         name: "login"
       }) */
      });
    },
    submit() {
      this.login(this.form).then(() => {
        this.$router.replace({
          name: "Logged",
        });
      });
    },
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>
//
<style scoped>
.error {
  color: red;
}
.login {
  padding: 2rem;

  background-image: url("../assets/background1.png");
  height: 100%;
}
.title {
  text-align: center;
  color: black
}
.form {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 300px;
  max-width: 100%;
  background: #e07a1b;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}

.msg {
  font-weight: 500;
  letter-spacing: 1px;
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
  border-color: #643102;
}
.form-submit {
  background: #a15106;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
.form-submit:hover {
  background: #643102;
}
</style>
