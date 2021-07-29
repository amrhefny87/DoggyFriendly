<template>
  <div class="d-flex flex-row justify-content-center align-items-center m-2">
    
    <b-icon icon="power" scale="2" style="color: black; cursor: pointer" alt="log out" @click.prevent="signOut"></b-icon>
    
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ProfileMenu",
  methods: {
    ...mapActions({
      login: "auth/login",
      signOutAction: "auth/signOut",
    }),
    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: "Login",
        });
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
