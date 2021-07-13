<template>
  <div class="home">
    <img style="width: 17rem" alt="Dog Logo" src="../assets/logoDog.png" />
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