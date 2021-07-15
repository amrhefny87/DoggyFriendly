<template>
  <div class="dogs">
    <Header />
    <h1 class="mt-3">Dog</h1>
    <Button root="/adtype" name="Add and Ad" />
    <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :result="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'
import {apidogs} from '@/apis/ApiDogs'
import Button from '@/components/Button.vue'
import Header from "@/components/Header.vue";

export default {
  name: 'Dogs',
  components: {
    NewAd,
    Button,
    Header
  },
  data(){
    return{
      events:[]
    }
},

mounted(){
    this.fetchApi()
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
</style>
