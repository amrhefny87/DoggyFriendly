<template>
  <div class="NewAdd d-flex flex-row">
    <b-card
      class="overflow-hidden pr-2 pl-2 pb-1 pt-2  shadow "
      style="max-width: 540px; background: #e07a1b; margin-right: 30px; margin-left:30px; margin-top: 15px; margin-bottom: 10px;"
    >
      <b-row no-gutters class="d-flex align-items-center">
        <b-col md="6">
          <b-card-img
            :src="result.image"
            alt="Image"
            class="rounded"
            id="img"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body>
            <h2 id="textitle">{{ result.title }}</h2>
            <b-card-text id="text">
              {{ result.description }}
            </b-card-text>

            <b-card-text> </b-card-text>

            <router-link
              :to="{
                name: 'Show',
                params: {
                  id: result.id,
                  title: result.title,
                  description: result.description,
                  comments: result.comments,
                  image: result.image,
                  date: result.date,
                },
              }"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >More Info</router-link
            >
            <router-link
              to="/edit"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >Edit</router-link
            >
            <b-button @click="deletemyEvent" id="buttonDelete" class="m-2"
              >Delete</b-button
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import { apidogs } from "@/apis/ApiDogs";

export default {
  name: "NewAdd",
  props: ["result"],
  mounted() {},
  methods: {
    async deletemyEvent() {
      await apidogs.delete(this.result.id);
      return (window.location.href = "dogs");
    },
  },
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
  width: 50%;
}

#buttonMore {
  background: #eab474;
}

#buttonMore:hover {
  background: #a15106;
}

#text {
  font-size: 13px;
}

#textTitle {
  font-size: 17px;
  font-weight: bold;
}

@media screen and (min-width: 500px) {
  #img {
    width: 200px;
  }
}
</style>
