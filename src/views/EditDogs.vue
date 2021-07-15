<template>
  <div>
    <FormDogs />
  </div>
</template>

<script>
import FormDogs from "@/views/FormDogs.vue";

export default {
  name: "EditDogs",
  components: {
    FormDogs,
  },
  methods: {
      
  }
};
</script>

<style>
#buttonDelete {
  display: none;
}

#buttonSubmit {
  display: none;
}
</style>
