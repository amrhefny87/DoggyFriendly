<template>
  <div class="dogs">
    <Header />
    <h2 class="mt-3 text-dark">{{type}}</h2>
    <Button  root="/adtype" name="Add and Ad" />
    <div
     v-if="!isLoading" 
     v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :result="event" :type="type" />
          
    </div>
    <div class="d-flex justify-content-center align-content-center">
      <ring-loader :loading="isLoading" :color="'#e07f24'" :size="200"></ring-loader>
      
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'
import {apidogs} from '@/apis/ApiDogs'
import Button from '@/components/Button.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Dogs',
  components: {
    NewAd,
    Button,
    Header,
    Footer,
  },
  data(){
    return{
      type: "Dogs",
      events:[],
      isLoading:false
      
    }
},

mounted(){
  this.isLoading = true
    this.fetchApi()
    .finally(() =>this.isLoading = false)
  },

methods:{
  async fetchApi() {
    const res = await apidogs.getAll();
    this.events = res.data
  }
}
}
</script>

<style scoped>
#buttonDogs {
  background: #e07a1b;
}

#buttonDogs:hover {
  background: #e07f24;
}
#button1{
  background: #EE8B16;
}

.dogs {
  background-image: url("../assets/background1.png");
}
</style>
