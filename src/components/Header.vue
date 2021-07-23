<template>
  <div id="nav" class="w-100 p-0 m-0 ">
    <b-navbar toggleable="lg" id="navbar">
      <router-link to="/">
        <b-img
          src="https://i.ibb.co/rQd5Wnz/imageonline-co-whitebackgroundremoved-1.png"
          alt="doggyF"
          id="image"
        />
      </router-link>
      <template v-if="authenticated">
        <div class="d-flex ">
        <b-img
          src="https://image.flaticon.com/icons/png/512/1077/1077114.png"
          alt="doggyF"
          id="profile-icon"
        />
        <p>Hello, {{user[3].name}}</p>
        </div>
      </template>
      <b-navbar-toggle target="navbar-toggle-collapse" class="m-2" id="border">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="x"></b-icon>
          <b-icon v-else icon="grid3x3-gap-fill" ></b-icon>
        </template>
      </b-navbar-toggle>
      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav
          class="ml-auto p-3 d-flex justify-content-start align-items-start"
        >
          <b-nav-item to="/dogs">Dogs</b-nav-item>
          <b-nav-item to="/sitters">Sitters</b-nav-item>
          <b-nav-item to="/adtype">Add New Post</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/register">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: black;
}

#nav a:hover {
  color: rgb(59, 36, 0);
}

#image {
  width: 50px;
  margin: 15px;
  cursor: pointer;
}

#navbar {
  background: #e07a1b;
}

#border {
  border: 1px solid transparent;
}

#profile-icon {
  width: 20px;
  height: 20px;
  margin-bottom: 5px;
  cursor: pointer;
}
</style>
