<template>
  <div class="dogs">
    <h1>Dog</h1>
    <router-link to="/dogs" class="btn text-white btn-primary">Add and Ad</router-link>
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