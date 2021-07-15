<template>
  <div class="NewAdd">
    <b-card 
      class="overflow-hidden pr-2 pl-2 pb-4 pt-3 d-flex flex-row align-items-center justify-content-center  "
      style="max-width: 540px; background: #e07a1b; margin-right: 40px; margin-left: 40px; margin-top: 30px; margin-bottom: 10px;"
    >
      <b-row no-gutters class="d-flex align-items-center" >
        <b-col md="6">
          <b-card-img
            src="https://trainthatpooch.com/wp-content/uploads/2018/11/Ways-Dogs-Communicate_Featured-730x510.png"
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
  </div>
</template>

<script>

export default {
  name: "NewAdd",
  props: [
    "result"
  ]

  
};
</script>
<style scoped>

.pet {
  height: 18vh;
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
