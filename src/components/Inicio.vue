<template>
  <div class="hello">
    <h1>DoggyF</h1>
    <h6 class="text-intro">
      The App for Dog-friendly people <br> The couchsurfing for dogs!
    </h6>
    <h6 class="text-intro2">
      "A dog is the only thing on earth that loves you more than he loves himself"
    </h6>
     
    
    <div
      class="d-flex justify-content-around align-items-center "
      style="margin-top:3vh; margin-bottom:20vh; ;"
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
  font-weight: 900;
  margin-top: 20px;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  font: italic bold 50px Georgia, Serif;
  text-shadow: -4px 3px 0 #ee8b16, -6px 5px 0 #0a0e27;
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
  padding: 20px;
  margin-top: 20px;
  font-size: 18px;
  filter: drop-shadow(5px 5px 4px rgba(102, 54, 27, 0.5));
  color: white;
}

.text-intro2 {
  margin: auto;
  padding: 20px;
  font-size: 20px;
  font-style: italic;
  width: 80%;
  color: black;
  text-shadow: -2px 1px 0 #ee8b16, -1px 1px 1px ;
  letter-spacing: 2px;
}
</style>
