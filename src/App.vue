<template>
  <div id="app" >
    
    <router-view />
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "App",
  components: { Header },
};
</script>

<style>
* {
font-family: 'Poppins', sans-serif;
}



</style>
