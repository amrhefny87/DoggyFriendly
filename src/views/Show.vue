<template>
  <div class="show">
    <Header />
    <div class="NewAdd d-flex flex-row justify-content-center">
      <b-card
        class="overflow-hidden pr-2 pl-2 pb-1 pt-2  shadow "
        style="max-width:600px; background: #e07a1b; margin-right: 30px; margin-left:30px; margin-top: 15px; margin-bottom: 10px;"
      >
        <b-row no-gutters class="d-flex  align-items-center">
          <b-col md="6">
            <a href="/profile"><b-card-img
              :src="this.$route.query.image"
              alt="Image"
              class="rounded"
              id="img"
            ></b-card-img></a>
          </b-col>
          <b-col md="6">
            <b-card-body class="d-flex flex-column align-items-center">
              <h2 id="textitle"> {{ this.$route.query.title }}</h2>
              <b-card-text id="text">
                <span style=" font-weight: 800">Description:</span> <br> {{ this.$route.query.description }}
              </b-card-text>
              <span style=" font-weight: 800">Comments:</span> {{ this.$route.query.comments }}
              <b-card-text> <span style=" font-weight: 800">Date:</span> <br> {{ this.$route.query.date }} </b-card-text>
            </b-card-body>
            
          </b-col>
        </b-row>
        <ButtonGoBack />
        <ButtonContact />
      </b-card>
      
    </div>
    
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header";
import NewAd from "../components/NewAd";
import ButtonGoBack from "../components/ButtonGoBack";
import ButtonContact from "../components/ButtonContact";
import Footer from "@/components/Footer.vue";


export default {
  props: ["id", "title", "description", "comments", "image", "date"],
  name: "Show",
  components: {
    Header,
    NewAd,
    ButtonGoBack,
    ButtonContact,
    Footer,
  },
  
};
</script>

<style>
#img {
  width: 150px;
}

.show {
  background-image: url("../assets/background1.png");
}
</style>
