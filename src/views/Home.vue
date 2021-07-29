<template>
  <div class="home2">
    <Header />
    <img style="width: 12rem; margin-top: 1rem;" alt="Dog Logo" src="../assets/logoDog.png" />
    <Inicio />
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    Inicio,
    Header
  }
}
</script>
<style scoped>
   .home2 {
     height: 100%;
     background-image: url('../assets/background1.png') ;
   }
</style>