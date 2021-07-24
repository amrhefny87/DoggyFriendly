<template>
  <div class="adType d-flex flex-column align-items-center">
    <Header/>
    <div class="p-5 d-flex flex-column align-items-center">
      <h2>What type of ad do you want to create?</h2>
      <div id="formDogContainer" class="border border-dark mt-5 shadow">
          <div class="d-flex flex-column justify-content-center flex-sm-row">
            <div class="p-3">
              <a href="/formdogs"><img class="icon-img" src="../assets/dogs.png"></a>
              <a href="/formdogs" class="link"><p>DOGS</p></a>
            </div>
            <div class="p-3">
                <a href="/formsitters"><img class="icon-img" src="../assets/sitters.png"></a>
                <a href="/formsitters" class="link"><p >SITTERS</p></a>
            </div>
          </div>
      </div>
    </div>
  <Footer />
  </div>

</template>
<script>
import Button from '@/components/Button.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: "AdType",
    components: {
        Button,
        Header,
        Footer,
    },
}
</script>
<style scoped>
#formDogContainer {
  background: #e07a1b;
  border-radius: 20px 20px 20px 0px;
  max-width:300px;
  width: 100%;
  margin-bottom:70px;
}

@media (min-width: 600px) {
  #formDogContainer {
    max-width:600px;
    padding: 30px;
  }
}
#button1{
  background: #E1701A;
}
.adType {
  background-image: url('../assets/background1.png');
  height: 100%;
}
.link {
  color: black;
  font-size: 24px;
  font-weight: bolder;
  font-style: italic;
  text-decoration: none;
  
}

.icon-img {
  width: 15vh;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
}

.text-intro{
  margin:auto;
  padding: 20;
  
}
</style>
