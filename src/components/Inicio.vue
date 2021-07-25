<template>
  <div class="hello">
    <h1>DoggyF</h1>
    <h6 class="text-intro">
      A dog is the only thing on earth that loves you more than he loves himself
    </h6>
    <div
      class="d-flex justify-content-around align-items-center "
      style="margin-top:10vh; margin-bottom:20vh; ;"
    >
      <div class="d-flex flex-column justify-content-center align-items-center">
        <a href="/dogs"><img class="icon-img" src="../assets/dogs.png"/></a>
        <a href="/dogs" class="link"><p>DOGS</p></a>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <a href="/sitters"><img class="icon-img" src="../assets/sitters.png"/></a>
        <a href="/sitters" class="link"><p>SITTERS</p></a>
      </div>
    </div>
    <div class="spacio"></div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Inicio",
  components: {
    Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: bold;
  margin-top: 30px;
  color: black;
}

h6 {
  margin-top: 15px;
  color: black;
  font-weight: bold;
  padding: 10px;

  line-height: 30px;
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

#button1 {
  background: #ee8b16;
}

.hello {
  /* background-image: url('../assets/background2.png') ; */

  overflow: hidden;
  width: 100%;
}

.spacio {
  height: 4vh;
}

.link {
  color: black;
  font-size: 30px;
  font-weight: bolder;
  font-style: italic;
  text-decoration: none;
}

.icon-img {
  width: 9vh;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
}

.text-intro {
  margin: auto;
  padding: 20;
  font-size: 16px;
}
</style>
