<template>
  <div class="">
    <Header />
    <template v-if="authenticated">
      <div class="d-flex justify-content-center align-items-center">
      <div class="container-logged">
        <h6>Hello {{user.name}}, you are already logged in :)</h6>
        <strong class="mt-4">Start dogging!</strong>
        <div class="d-flex flex-column">
        
        <Button root="/profile" name="Check out your profile and edit your info " id="buttonProfile" />
      </div>  
      </div>
       </div>
    </template>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Button from "@/components/Button.vue"
import {  mapGetters} from "vuex"
export default {
  name: "Logged",
 
  components: {
    Header,
    Footer,
    Button,
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  }
}
</script>

<style scoped>
.container-logged {
  background: #e07a1b;
  padding: 30px;
  border-radius: 20px 20px 20px 0px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 8rem;
  margin-bottom: 12rem;
  max-width: 500px;
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.25));
  
}

#buttonProfile {
  background: #E9A14C;
}
</style>