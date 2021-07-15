<template>
  <div>
    <Header />
    <div class="p-5 d-flex flex-column align-items-center">
    <h2>Create Add for your Dog</h2>
    <div id="formDogContainer" class="shadow">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="m-2"
          id="input-group-2"
          label=""
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
          label=""
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
          label=""
          label-for="input-2"
          class="m-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.title"
            placeholder="Enter title"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label=""
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
          label="Upload image"
          label-for="input-2"
          class="m-2 d-flex flex-column"
        >
          <b-form-file
            id="input-2"
            v-model="form.image"
            placeholder=""
            required
          ></b-form-file>
        </b-form-group>

        <b-button type="submit" id="buttonSub" class="m-2">Submit</b-button>
        <b-button @click="editmyEvent" id="buttonSub" class="m-2">EDIT</b-button>
        <b-button @click="deletemyEvent" id="buttonSub" class="m-2">Delete</b-button>
        <b-button type="reset" id="buttonSub2" class="m-2">Reset</b-button>
      </b-form>
    </div>
    </div>
  </div>
</template>
<script>

import {apidogs} from '@/apis/ApiDogs'
import Header from "@/components/Header.vue";
export default {
  name: "FormDogs",
  components: {
    
    Header
  },

  data() {
    return {
      form: {},
      show: true,
    };
  },
  mounted(){
    this.onSubmit()
  },
  methods: {

    async onSubmit(event) {
      event.preventDefault();
      await apidogs.create(this.form);
      return window.location.href =  "dogs"
    },
    async editmyEvent() {
      await apidogs.editEvent(3, this.form)
      return window.location.href =  "dogs"
  },
  async deletemyEvent() {
      await apidogs.delete(1)
      return window.location.href =  "dogs"
  },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.description = "";
      this.form.name = "";
      this.form.title = "";
      this.form.comments = "";
      this.form.image = "";
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
  margin-top: 2rem;
  max-width: 500px;
  
}

#buttonSub {
    background: #eab474;
}

#buttonSub2 {
    background: #eab474;
}
</style>
