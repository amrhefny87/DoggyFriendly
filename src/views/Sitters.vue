<template>
  <div class="dogs">
    <Header />
    <h1 class="mt-3">{{type}}</h1>
    <Button root="/adtype" name="Add and Ad" />
    <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :result="event" :type="type" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'
import {apisitters} from '@/apis/ApiSitters'
import Button from '@/components/Button.vue'
import Header from "@/components/Header.vue";

export default {
  name: 'Sitters',
  components: {
    NewAd,
    Button,
  Header,
  },
  
  
  data(){
    return{
      type: "Sitters",
      events:[]
    }
},

mounted(){
    this.fetchApi()
  },

methods:{
  async fetchApi() {
    const res = await apisitters.getAll();
    this.events = res.data
  }
}
}
</script>

<style scoped>
#button1{
  background: #EE8B16;
}
</style>