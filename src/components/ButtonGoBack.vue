<template>
  <button
    class="btn text-black m-2 rounded-top rounded-bottom"
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
  background: #eab474;
}
#buttonGoBack:hover {
  background: #a15106;
}

</style>
