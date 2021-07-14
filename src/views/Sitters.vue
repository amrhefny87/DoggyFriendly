<template>
  <div class="dogs">
    <h1>Sitters</h1>
    <router-link to="/dogs" class="btn text-white btn-primary">Add and Ad</router-link>
    <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :result="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'
import {apisitters} from '@/apis/ApiSitters'

export default {
  name: 'Sitters',
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
    const res = await apisitters.getAll();
    this.events = res.data
  }
}
}
</script>