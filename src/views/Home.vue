<template>
  <div class="home2">
    <img style="width: 17rem; margin-top: 3rem;" alt="Dog Logo" src="../assets/logoDog.png" />
    <Inicio />
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue'

export default {
  name: 'Home',
  components: {
    Inicio
  }
}
</script>
<style scoped>
   .home2 {
     background-image: url('../assets/background2.png') ;
   }
</style>