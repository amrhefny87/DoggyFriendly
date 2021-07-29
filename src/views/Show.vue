<template>
  <div class="show">
    <Header />
    <div class="d-flex justify-content-center align-items-center mt-2 mb-5" >
      <div 
      
        class="d-flex flex-column flex-sm-row p-3 shadow rounded justify-content-center align-items-center"
        style="max-width:1100px; background: #e07a1b; margin-right: 30px; margin-left:30px; margin-top: 30px; margin-bottom: 110px;"
      >
      <div id="container-show">
        <a href="/profile"
          ><b-card-img
            :src="this.$route.query.image"
            alt="Image"
            class="rounded"
            id="img"
          ></b-card-img
        ></a>
        <h2 class="pt-2">{{ this.$route.query.title }}</h2>
        </div>
        <div>
          <router-link
          :to="{
            name: 'profile-other',
          query: {
            user_id: this.$route.query.user_id 
            },
            }"
            class="btn text-black m-2 rounded-top rounded-bottom"
            id="buttonContact"
            >Contact</router-link>
           <ButtonGoBack />
           <b-card-text>

          <span id="text" style=" font-weight: 800">Date:</span> <br />
          {{ this.$route.query.date }}
        </b-card-text>
        </div>
        
        <b-card-text id="text" class=" p-3">
          <span style=" font-weight: 800">Description:</span> <br />
          {{ this.$route.query.description }}
        </b-card-text>
        <b-card-text id="text" class="p-3">
          <span style=" font-weight: 800">Comments:</span> <br />
          {{ this.$route.query.comments }}</b-card-text
        >
        
       
        
      </div>
      
    </div>

    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import NewAd from "../components/NewAd";
import ButtonGoBack from "../components/ButtonGoBack";
import Footer from "@/components/Footer.vue";

export default {
  props: ["id", "title", "description", "comments", "image", "date", "name", "user_id"],
  name: "Show",
  components: {
    Header,
    NewAd,
    ButtonGoBack,
    Footer,
  },
};
</script>

<style >
#buttonContact {
  background: #eab474;
}
#buttonContact:hover {
  background: #a15106;
}
#img {
  width: 100px;
}

@media (min-width: 600px) {
  #img {
  width: 150px;
}
}

@media (min-width: 600px) {
  #container-show {
  padding: 20px;
  
}
}

.show {
  background-image: url("../assets/background1.png");
}

#buttonMore {
  background: #eab474;
}

#buttonMore:hover {
  background: #a15106;
}

#text {
  color: black;
}

#textitle {
  color: black;
  font-weight: bold;
}
</style>
