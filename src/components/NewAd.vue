<template>
  <div class="container-add d-flex  border border-dark rounded-3">
    <img class="pet" alt="Dog" src="../assets/dog.jpg" />
    <div>
        <h2>{{event.title }}</h2>
        <h3>{{event.description }}</h3>
        <h4>{{event.date }}</h4>
      <router-link to="/dogs" class="moreInfo position-absolute btn text-white btn-primary">More Info</router-link>
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'NewAdd',
  props: 
    [
    "event",
    ],
}
</script>
<style scoped>
.container-add {
    width:  85%;
    margin-top: 5%;
}
.pet {
    height: 18vh;
}
.moreInfo {
    margin-left: 20px;
    margin-top: -22px;
}
h3 {
    font-size: 13px;
}
h4 {
    font-size: 9px
}
</style>
