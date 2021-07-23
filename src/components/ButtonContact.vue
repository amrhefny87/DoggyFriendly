<template>
  <router-link
    :to="{
      name: 'profile',
     
    }"
    class="moreInfo btn text-black m-3 "
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
