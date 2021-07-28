<template>
  <router-link
    :to="{
      name: 'profile-other',
     
    }"
    class="btn text-white m-2 rounded-top rounded-bottom"
    id="buttonContact"
    >Contact</router-link
  >
</template>

<script>
export default {
  name: "buttonContact",
  props: ["result"],
  methods: {},
};
</script>

<style>
#buttonContact {
  background: #5c636a;
}
#buttonContact:hover {
  background: #a15106;
}
</style>
