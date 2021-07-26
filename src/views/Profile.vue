<template>
  <div class="all d-flex justify-content-center">
    <Header />
    <template v-if="authenticated">
      <div>
        <button
          class="btn text-white m-3 rounded-top rounded-bottom"
          id="buttonLogout"
          @click.prevent="signOut"
        >
          Log Out
        </button>

        <ButtonMyPosts />
      </div>
    </template>
    <div class="all_info">
         <h2 class="text-center m">Your profile</h2> 
      <section class="profil">
         
        <img class="img" src="../assets/profil.png" alt="Foto" />

        <b-container class="info-grid">
          <b-row class="mt-3" align-v="start">
            <b-col cols="5" class="title">Name</b-col>
            <b-col cols="3" class="text">{{user[3].name}}</b-col>
            <b-col><img class="stars" src="../assets/stars.png" alt=""/></b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col sm="5" class="title">Direction</b-col>
            <b-col sm="7" class="text">{{user[3].direction}}</b-col>
          </b-row>

          <b-row class="mt-3">
            <b-col cols="5" class="title">About Us</b-col>
            <b-col cols="7" class="text"
              ><p>
               {{user[3].pet_name}}
              </p></b-col
            >
          </b-row>
        </b-container>
      </section>
     
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import ButtonMyPosts from "../components/ButtonMyPosts";
export default {
  props: ["id", "title", "description", "direction", "comments", "image", "date"],
  name: "Profile",
  components: {
    Header,

    Footer,

    ButtonMyPosts,
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        /*this.$router.replace({
         name: "login"
       }) */
      });
    },
  },
    computed: {
      ...mapGetters({
        authenticated: "auth/authenticated",
        user: "auth/user",
      }),
    },
  
};
</script>

<style>
.all {
  flex-direction: column;
  overflow: visible;
  background-image: url("../assets/background1.png");
}
.all_info {
  align-items: center;
  border: 1px solid rgb(17, 17, 17);
  border-radius: 25px 25px 25px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
  width: 80%;
  background-color: #e9a14c;
  box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.25);
}
.img {
  max-width: 80%;
  margin: auto;
}

.name {
}

.text {
  text-align: start;
  max-width: 100%;
}
.stars {
  margin-top: -10px;
  width: 10vh;
}
.profil {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.info-grid {
  max-width: 90%;
  overflow: hidden;
}
.title_form {
  margin-left: 20px;
}
.title {
  text-align: start;
  font-weight: bolder;
}
strong {
  width: 15px;
  padding-right: 10px;
}
.item {
  margin-top: 30px;
}
.item_3 {
  display: flex;
}
.btn {
  margin-top: 60px;
}
.contact {
  display: flex;
  margin-top: 20px;
}
.contact img {
}



p {
  width: 220px;
}

#buttonLogout {
  background: #5c636a;
}
#buttonLogout:hover {
  background: #a15106;
}

#buttonMyPost {
  background: #5c636a;
}
#buttonMyPost:hover {
  background: #a15106;
}
</style>
