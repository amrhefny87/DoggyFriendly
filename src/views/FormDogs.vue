<template>
  <div class="p-5">
    <h2>Create Add for your Dog</h2>
    <div id="formDogContainer">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="m-2"
          id="input-group-2"
          label="Description "
          label-for="input-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="form.description"
            placeholder="Enter description"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Name"
          label-for="input-2"
          class="m-2 text-left"
        >
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Availability"
          label-for="input-2"
          class="m-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.availability"
            placeholder="Enter availability"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Comments"
          label-for="input-2"
          class="m-2"
        >
          <b-form-textarea
            id="input-2"
            v-model="form.comments"
            placeholder="Enter comments"
            required
          ></b-form-textarea>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Upload picture"
          label-for="input-2"
          class="m-2 d-flex flex-column"
        >
          <b-form-file
            id="input-2"
            v-model="form.picture"
            placeholder=""
            required
          ></b-form-file>
        </b-form-group>

        <b-button type="submit" id="buttonSub" class="m-2">Submit</b-button>
        <b-button type="reset" id="buttonSub2" class="m-2">Reset</b-button>
      </b-form>
    </div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "FormDogs",

  data() {
    return {
      form: {
        description: "",
        name: "",
        availability: "",
        comments: "",
        picture: "",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.description = "";
      this.form.name = "";
      this.form.availability = "";
      this.form.comments = "";
      this.form.picture = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style scoped>
#formDogContainer {
  background: #e07a1b;
  padding: 10px;
  border-radius: 20px;
}

#buttonSub {
    background: #eab474;
}

#buttonSub2 {
    background: #eab474;
}
</style>
