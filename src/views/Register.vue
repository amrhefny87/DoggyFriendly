<template>
<div>
  <Header />
  <div class="register">
    <h1 class="title">Sign Up</h1>
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
      <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
      <input
        v-model="form.password_confirmation"
        class="form-input"
        type="password"
        id="password-repeat"
        placeholder="Password"
      >
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Sign Up">
    </form>
  </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
import Header from "@/components/Header.vue";

export default {
  name: "Register",
  components: {Header},
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
        this.$router.push("/")
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
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>