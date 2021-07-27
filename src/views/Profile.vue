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
      </div>
    </template>
    <h2 class="text-center text-dark font-weight-bold">My profile</h2>
    <div class="all_info">
      
      
      <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start text-dark">
        <img class="img mb-3" src="../assets/profil.png" alt="Foto" />
        <div>
          <p class="infoProfile">Name:  </p>
          <p>{{ user.name }}</p>
        </div>
        <div>
          <p class="infoProfile">Direction: </p>
          <p>{{ user.direction }}</p>
        </div>
        <div>
          <p class="infoProfile">About us:  </p>
          <p>{{ user.pet_name }}</p>
        </div>
      </div>
      
          <router-link
             :to="{
                name: 'editprofile',
                 params: {
                  id: user.id,
                  name: user.name,
                  direction: user.direction,
                   password: user.password,
                  image: user.image,
                  pet_name: user.pet_name,
                
                  
                },
              }"
              class="moreInfo btn text-black m-3 "
              id="buttonMore"
              >Edit</router-link
            >
           
       
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  props: [
   ""
  ],
  name: "Profile",
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
         name: "login"
       }) 
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
    border-radius: 25px 25px 25px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 30px;
  width: 90%;
  background-color: #e9a14c;
  box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.25);
}
.img {
  max-width: 60%;
  width: 20%;
  margin: auto;
}

@media (max-width: 600px) {
 .img {
  max-width: 60%;
  width: 50%;
  margin: auto;
}
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

@media (max-width: 500px) {
 .profil {
  display: flex;
  flex-direction: row;
  
}
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
#buttonMore {
background: #a15106;
}

.infoProfile {
  font-weight: 900;
  
}
 
</style>
