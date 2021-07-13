<template>
  <div class="dogs">
    <h1>Sitters</h1>
    <router-link to="/dogs" class="btn text-white btn-primary">Add and Ad</router-link>
    <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'
import axios from 'axios'

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
    axios.get('http://127.0.0.1:8000/api/postsitters').then
    (response => {this.events = response.data})
  },

methods:{}

  

}

</script>