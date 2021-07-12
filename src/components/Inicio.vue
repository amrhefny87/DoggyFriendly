<template>
  <div class="hello">
    <h1>DoggyF</h1>
    <p>A dog is the only thing on earth that loves you more than he loves himself</p>
    <div class="btn-group-vertical" role="group" aria-label="Basic example">
      <router-link to="/dogs" class="btn text-white btn-primary">DOGS</router-link>
      <router-link to="/sitters" class="btn text-white btn-primary">SITTERS</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
