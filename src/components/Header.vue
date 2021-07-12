<template>
  <div id="nav" class="w-100 p-0 m-0 ">
        <b-navbar toggleable id="navbar">
          <router-link to="/">
            <b-img src="https://i.ibb.co/rQd5Wnz/imageonline-co-whitebackgroundremoved-1.png" alt="doggyF" id="image" />
          </router-link>
        <b-navbar-toggle target="navbar-toggle-collapse" type="dark" class="m-4">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up" ></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse"  is-nav>
          <b-navbar-nav class="ml-auto p-3 d-flex justify-content-start align-items-start">
            <b-nav-item to="/dogs">Dogs</b-nav-item>
            <b-nav-item to="/sitters" >Sitters</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

export default {
  name: 'Header',
  
}

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

#image {
  width: 70px;
  margin: 15px;
}

#navbar {
  background: #E07A1B;
}


</style>
