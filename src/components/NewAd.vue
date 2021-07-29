<template>
  <div class="NewAdd d-flex flex-row">
    <b-card
      class="overflow-hidden pr-2 pl-2 pb-1 pt-2  shadow "
      style="max-width: 540px; background: #e07a1b; margin-right: 30px; margin-left:30px; margin-top: 15px; margin-bottom: 10px;"
    >
      <b-row no-gutters class="d-flex align-items-center ">
        <b-col md="6">
          <b-card-img
            :src="result.image"
            alt="Image"
            class="rounded"
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

                },
              }"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >More Info</router-link
            >
            </div>
            <div v-if="type === 'Dogs'">
            <router-link
             :to="{
                name: 'EditAdDogs',
                params: {
                  id: result.id,
                  title: result.title,
                  description: result.description,
                  comments: result.comments,
                  image: result.image,
                  date: result.date,
                  name: result.name,
                },
              }"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >Edit</router-link
            >
            </div>
            <div v-if="type === 'Sitters'">
            <router-link
             :to="{
                name: 'EditAdSitters',
                params: {
                  id: result.id,
                  title: result.title,
                  description: result.description,
                  comments: result.comments,
                  image: result.image,
                  date: result.date,
                  name: result.name,
                },
              }"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >Edit</router-link
            >
            </div>
            <div v-if="type === 'Dogs'">
            <b-button @click="buttonDeleteDogs" id="deletemyEvent" class="m-2"
              >Delete</b-button
            >
            </div>
             <div v-if="type === 'Sitters'">
            <b-button @click="buttonDeleteSitters" id="deletemyEvent" class="m-2"
              >Delete</b-button
            >
            
            
            </div>
            <div v-if="type === 'Dogs'">
            <b-button @click="likePostDog" id="likeAPost" class="m-2"
              >Woof</b-button
            >
            <!-- <b-img :src="assets/pawDarK.png"></b-img> -->
            
            </div>
            <div v-if="type === 'Dogs'">
              <b-button @click="dislikePostDog" id="dislikeAPost" class="m-2"
              >DisWoof</b-button
            >
            </div>
            <div v-if="type === 'Dogs'">
              <p id="idCount" class="m-2"
              >{{likesCount}} {{}}</p
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
import { mapGetters } from "vuex";
import { apidogs } from "@/apis/ApiDogs";
import {apilikesdogs} from '@/apis/ApiLikesDogs'
import { apisitters } from "@/apis/ApiSitters";




export default {
  name: "NewAdd",
  data() {
    return {
      likesCount: "",
      profile:user
    }
  },
  props: ["result", "type"],
  mounted() {
    this.countLikes(),
    this.likeCheck()
  },
  methods: {
    async buttonDeleteDogs() {
      await apidogs.delete(this.result.id);
      //return (window.location.href = "dogs");
      return this.$router.push("Dogs");
    },
    async buttonDeleteSitters() {
      await apisitters.delete(this.result.id);
      return (window.location.href = "sitters");
    },
    async likePostDog(){
      await apilikesdogs.like(this.result);
      return (window.location.href = "dogs");
    },
    async dislikePostDog(){
      await apilikesdogs.dislike(this.result.id);
      
      return (window.location.href = "dogs");
      
    },
    async countLikes(){
      const likeCount = await apilikesdogs.getLikes(this.result.id);
      this.likesCount = likeCount.data;
      // return (window.location.href = "dogs");
      return this.$router.push("Dogs");
    },

    async likeCheck(){
      const likes = await apilikesdogs.getAll();

      
      
      // var data = {specs:[{Name:"Power",Value:"1"},{
      //   Name:"Weight",Value:"2"},{Name:"Height",Value:"3"}]}
    
      var check = likes.data.filter(function(elem){
          if(elem.user_id == 5) return elem.user_id;
      });

      if(check.length > 0)
        console.log(user)
      
          





    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
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
  width: 80px;
}

#buttonMore {
  background: #eab474;
}

#buttonMore:hover {
  background: #a15106;
}

#text {
  font-size: 12px;
}

#textitle {
  font-size: 15px;
  font-weight: bold;
}

@media screen and (min-width: 500px) {
  #img {
    width: 200px;
  }
}
</style>
