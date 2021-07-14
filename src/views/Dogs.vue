<template>
  <div class="dogs">
<<<<<<< HEAD
    <h1 class="mt-3 mb-3">Dog</h1>
    <router-link to="/dogs" class="btn text-black" id="buttonDogs">Add and Ad</router-link>
    <div class="d-flex flex-column align-items-center">
        <NewAd />
        <NewAd />
        <NewAd />
=======
    <h1>Dog</h1>
    <router-link to="/dogs" class="btn text-white btn-primary">Add and Ad</router-link>
    <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
          <NewAd :key="event.id"  :event="event" />
>>>>>>> caf89d451c346819fdd6cd7fb0a2a6ece1f0f08f
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
    axios.get('http://127.0.0.1:8000/api/postdogs').then
    (response => {this.events = response.data})
  },

methods:{}

  

}
<<<<<<< HEAD
</script>

<style scoped>
#buttonDogs {
  background: #e07a1b;
}

#buttonDogs:hover {
  background: #e07f24;
}
</style>
=======

</script>
>>>>>>> caf89d451c346819fdd6cd7fb0a2a6ece1f0f08f
