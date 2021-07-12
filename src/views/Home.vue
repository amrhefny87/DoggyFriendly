<template>
  <div class="home">
    <img alt="Dog Logo" src="../assets/logo.png">
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
