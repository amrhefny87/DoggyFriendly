<template>
  <div class="NewAdd d-flex flex-row">
    <b-card
      class="overflow-hidden pr-2 pl-2 pb-1 pt-2  shadow "
      style="max-width: 540px; background: #e07a1b; margin-right: 30px; margin-left:30px; margin-top: 15px; margin-bottom: 10px; border-radius: 20px"
    >
      <b-row no-gutters class="d-flex align-items-center ">
        <b-col md="6">
          <b-card-img
            :src="result.image"
            alt="Image"
            style="border-radius: 20px"
            id="img"
          ></b-card-img>
        </b-col>
        <b-col md="6" >
          <b-card-body class="d-flex justify-content-center align-items-center d-flex flex-column">
            <h2 id="textitle">{{ result.title }}</h2>
            <b-card-text id="text">
              {{ result.description }}
            </b-card-text>
            <div class="d-flex flex-wrap justify-content-center align-items-center">
            <div>
            <router-link
              :to="{
                name: 'Show',
               query: {
                  id: result.id,
                  title: result.title,
                  description: result.description,
                  comments: result.comments,
                  image: result.image,
                  date: result.date,
                  name: result.name,
                  user_id: result.user_id
                },
              }"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >More Info</router-link
            >
            </div>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>

export default {
  name: "NewAdd",
  props: ["result", "type"],
  mounted() {},
  
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
  width: 80px;
}

#buttonMore {
  background: #eab474;
}

#buttonMore:hover {
  background: #a15106;
}

#text {
  color: black;
  font-size: 12px;
}

#textitle {
  color: black;
  font-size: 15px;
  font-weight: bold;
}

@media screen and (min-width: 500px) {
  #img {
    width: 200px;
  }
}
</style>
