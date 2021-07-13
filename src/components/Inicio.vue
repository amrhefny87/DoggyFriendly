<template>
  <div class="hello">
    <h1 >DoggyF</h1>
    <h6>A dog is the only thing on earth that loves you more than he loves himself</h6>
    <div class="btn-group-vertical" role="group" aria-label="Basic example">
      <router-link to="/dogs" class="btn text-white m-2 rounded-top rounded-bottom" id="button1">DOGS</router-link>
      <router-link to="/sitters" class="btn text-white m-2 rounded-top rounded-bottom" id="button2">SITTERS</router-link>
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
h1 {
  font-weight: bold;
  margin-top: 15px;
}

h6 {
  margin-top: 15px ;
  color: white;
  font-weight: bold;
  padding: 10px;
  text-shadow: 2px 2px black;
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

#button1{
  background: #EE8B16;
}

#button2{
  background: #EE8B16;
}
</style>
