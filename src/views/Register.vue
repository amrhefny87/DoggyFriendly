<template>
<div>
  <Header />
  <div class="register">
    <h2 class="titleRegister">Sign Up</h2>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model="form.email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      >
      <label class="form-label" for="#name">Name:</label>
      <input
        v-model="form.name"
        class="form-input"
        type="text"
        id="name"
        required
        placeholder="Name"
      >
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model="form.password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      >
      <label class="form-label" for="#password-repeat">Repeat password:</label>
      <input
        v-model="form.password_confirmation"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      >
      <p v-if="error" class="error">Your password is incorrect. Introduce it again.</p>
      <input class="form-submit" type="submit" value="Sign Up">
    </form>
  </div>
  <Footer />
  </div>
</template>

<script>
import {auth} from "@/apis/auth";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "Register",
  components: {Header, Footer},
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    error: false
  }),
  methods: {
    async register() {
      try {
        await auth.register(this.form);
        this.$router.push("/login")
      } catch (error) {
        this.error = true;
      }
    }
  }
};
</script>

<style  scoped>
.register {
  padding: 2rem;
  background-image: url("../assets/background1.png");
  height: 100%;
}
.titleRegister {
  text-align: center;
  color: black;
  font-weight: bold;
  
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
.error {
  margin: 1rem 0 0;
  color: #d651c4;
}
</style>