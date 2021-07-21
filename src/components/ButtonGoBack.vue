<template>
  <button
    class="btn text-white m-2 rounded-top rounded-bottom"
    id="buttonGoBack"
    @click="goBack()"
  >
    Go Back
  </button>
</template>

<script>
export default {
  name: "ButtonGoBack",
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style>
#buttonGoBack {
  background: #5c636a;
}
#buttonGoBack:hover {
  background: #a15106;
}
</style>
