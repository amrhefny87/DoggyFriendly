<template>
  <div class="dogs">
    <h1 class="mt-3 mb-3">Dog</h1>
    <router-link to="/dogs" class="btn text-black" id="buttonDogs">Add and Ad</router-link>
    <div class="d-flex flex-column align-items-center">
        <NewAd />
        <NewAd />
        <NewAd />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NewAd from '@/components/NewAd.vue'

export default {
  name: 'Dogs',
  components: {
    NewAd
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
</style>