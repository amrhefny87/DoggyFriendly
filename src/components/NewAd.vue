<template>
<<<<<<< HEAD
  <div class="NewAdd">
    <b-card 
      class="overflow-hidden pr-2 pl-2 pb-4 pt-3 d-flex flex-row align-items-center justify-content-center  "
      style="max-width: 540px; background: #e07a1b; margin-right: 40px; margin-left: 40px; margin-top: 30px; margin-bottom: 10px;"
    >
      <b-row no-gutters class="d-flex align-items-center" >
        <b-col md="6">
          <b-card-img
            src="https://picsum.photos/400/400/?image=20"
            alt="Image"
            class="rounded"
            id="img"
          ></b-card-img>
        </b-col>
        <b-col md="6" v-if="result">
          <b-card-body>
            <h2>{{ result.title }}</h2>
            <b-card-text>
              {{ result.description }}
            </b-card-text>
            <b-card-text>
              
            </b-card-text>

            <router-link
              to="/dogs"
              class="moreInfo btn text-black  "
              id="buttonMore"
              >More Info</router-link
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
=======
  <div class="container-add d-flex  border border-dark rounded-3">
    <img class="pet" alt="Dog" src="../assets/dog.jpg" />
    <div>
        <h2>{{event.title }}</h2>
        <h3>{{event.description }}</h3>
        <h4>{{event.date }}</h4>
      <router-link to="/dogs" class="moreInfo position-absolute btn text-white btn-primary">More Info</router-link>
    </div>
   
>>>>>>> caf89d451c346819fdd6cd7fb0a2a6ece1f0f08f
  </div>
</template>

<script>

export default {
<<<<<<< HEAD
  name: "NewAdd",
  components: {
    ApiDogs
  }
  
};
import ApiDogs from '@/components/ApiDogs.vue';
=======
  name: 'NewAdd',
  props: 
    [
    "event",
    ],
}
>>>>>>> caf89d451c346819fdd6cd7fb0a2a6ece1f0f08f
</script>
<style scoped>

.pet {
<<<<<<< HEAD
  height: 18vh;
=======
    height: 18vh;
}
.moreInfo {
    margin-left: 20px;
    margin-top: -22px;
>>>>>>> caf89d451c346819fdd6cd7fb0a2a6ece1f0f08f
}

h3 {
  font-size: 13px;
}
h4 {
  font-size: 9px;
}

#img {
  width: 65%;
}

#buttonMore {
  background: #eab474;
}

#buttonMore:hover {
  background: #a15106;
}
</style>
