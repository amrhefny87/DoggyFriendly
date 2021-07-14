<template>
  <div class="p-5">
    <h2>Create Add for your Dog</h2>
    <div id="formDogContainer">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="m-2"
          id="input-group-2"
          label="Date "
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.date"
            placeholder="Enter Date" type="date"
            required
          ></b-form-input>
        </b-form-group>
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
          label="Title"
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

        <b-button @click="creatAd" type="submit" id="buttonSub" class="m-2">Submit</b-button>
        <b-button type="reset" id="buttonSub2" class="m-2">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: "FormDogs",

  data() {
    return {
      form: [{
        name: "",
        description: "",        
        date: "2019-05-28 18:42:38",
        comments: "",
        image: "",
        title: ""
      }],
      

      show: true,
    };
  },
  methods: {
    async creatAd() {
      await axios.post("http://localhost:8000/api/postdogs", this.form)

    },
    onSubmit(event) {
      event.preventDefault();
      console.log(this.form)
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
}

#buttonSub {
    background: #eab474;
}

#buttonSub2 {
    background: #eab474;
}
</style>
