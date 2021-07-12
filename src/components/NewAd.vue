<template>
  <div class="container-add d-flex  border border-dark rounded-3">
    <img class="pet" alt="Dog" src="../assets/dog.jpg" />
    <div>
        <h2>Jack King</h2>
        <h3>I want someone to take care of my dog</h3>
        <h4>Between 13:00 and 17:00</h4>
      <router-link to="/dogs" class="moreInfo position-absolute btn text-white btn-primary">More Info</router-link>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'NewAdd',
}
</script>
<style scoped>
.container-add {
    width:  85%;
}
.pet {
    height: 18vh;
}
.moreInfo {
    margin-left: 20px;
}
h3 {
    font-size: 13px;
}
h4 {
    font-size: 9px
}
</style>