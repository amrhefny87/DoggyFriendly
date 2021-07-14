<template>
  <div class="dogs">
    <h1>Dog</h1>
    <router-link to="/dogs" class="btn text-white btn-primary">Add and Ad</router-link>
    <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'
import {apidogs} from '@/apis/ApiDogs'

export default {
  name: 'Dogs',
  components: {
    NewAd
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