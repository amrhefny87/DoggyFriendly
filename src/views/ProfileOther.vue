<template>
  <div class="all d-flex justify-content-center align-items-center">
    <Header />
    <template v-if="authenticated"> </template>
    <div class="all_info">
      <h2 class="titleProfile text-center text-dark mb-5">{{ this.form.name }}</h2>
      <div
        class="d-flex flex-column flex-lg-row justify-content-around align-items-center  align-items-lg-start text-dark"
      >
        <img class="img mb-3 rounded-circle" :src="user.image" alt="Foto" />

        <div>
          <p class="infoProfile">Direction:</p>
          <p>{{ this.form.direction }}</p>
        </div>
        <div>
          <p class="infoProfile">About us:</p>
          <p>{{ this.form.about_us }}</p>
        </div>
        
      </div>
      <div class="d-flex flex-column align-items-center justify-content-center">
      <p class=" infoProfile text-dark ">Contact:</p>
      <img
            class="img_contact"
            src="../assets/whatsapp 1.png"
            @click="apiwhatsapp()"
            alt="fffff"
          />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapActions } from "vuex";
import { auth } from "@/apis/auth";
export default {
  props: ["user_id"],
  name: "profile-other",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      form: {},
    };
  },
  mounted() {
    this.profile();
  },

  methods: {
    apiwhatsapp() {
      window.location.href = `https://api.whatsapp.com/send?phone=${this.form.number}&text=hola ${this.form.name},%20qué%20tal?`;
    },
    async profile() {
      const res = await auth.otherUser(this.$route.query.user_id);
      this.form = res.data;
    },
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

<style scoped>
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

.text {
  text-align: start;
  max-width: 100%;
}


.contact {
  display: flex;
  margin-top: 20px;
}

.img_contact {
  width: 30px;
  height: 30px;
  cursor: pointer;
}



</style>
