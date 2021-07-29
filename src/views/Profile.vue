<template>
  <div class="all d-flex justify-content-center align-items-center">
    <Header />
    <template v-if="authenticated"> </template>
    <h2 class="titleProfile text-center text-dark mt-4">My profile</h2>
    <div class="all_info">
      <div
        class="d-flex flex-column flex-lg-row justify-content-around align-items-center  align-items-lg-start text-dark"
      >
        <img class="img mb-3 rounded-circle" :src="user.image" alt="Foto" />
        <div>
          <p class="infoProfile">Name:</p>
          <p>{{ user.name }}</p>
        </div>
        <div>
          <p class="infoProfile">Direction:</p>
          <p>{{ user.direction }}</p>
        </div>
        <div>
          <p class="infoProfile">About us:</p>
          <p>{{ user.about_us }}</p>
        </div>
      </div>
      <div>
        <router-link
          :to="{
            name: 'editprofile',
            params: {
              id: user.id,
              name: user.name,
              direction: user.direction,
              password: user.password,
              image: user.image,
              about_us: user.about_us,
            },
          }"
          class="moreInfo btn text-white m-3 "
          id="buttonMore"
          >Edit profile</router-link
        >
        <ButtonMyPostsDogs />
        <ButtonMyPostsSitters />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import ButtonMyPostsDogs from "../components/ButtonMyPostsDogs";
import ButtonMyPostsSitters from "../components/ButtonMyPostsSitters";
export default {
  props: [""],
  name: "Profile",
  components: {
    Header,
    Footer,
    ButtonMyPostsDogs,
    ButtonMyPostsSitters,
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "login",
        });
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 25px 25px 25px 0px;
  margin-top: 20px;
  margin-bottom: 110px;
  padding: 30px;
  width: 80%;
  background-color: #e9a14c;
  box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.25);
}

.titleProfile {
  font-weight: 700;
}
.img {
  max-width: 60%;
  width: 20%;
  margin: 10px;
}

@media (max-width: 600px) {
  .img {
    max-width: 60%;
    width: 50%;
    margin: auto;
  }
}

.title {
  text-align: start;
  font-weight: bolder;
}

.contact {
  display: flex;
  margin-top: 20px;
}


#buttonMore {
  background: #a15106;
}

.infoProfile {
  font-weight: 900;
}

#buttonMyPost {
  background: #5c636a;
}
#buttonMyPost:hover {
  background: #a15106;
}
</style>
