<template>
<div>
  <Header />
  <div class="p-5 d-flex flex-column align-items-center ">
    <h2>Create your Sitter Add</h2>
    <div id="formDogContainer" class="shadow">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          class="m-2"
          id="input-group-2"
          label=" "
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
        

        <b-button type="submit" id="buttonSub" class="m-2">Submit</b-button>
        <b-button type="reset" id="buttonSub2" class="m-2">Reset</b-button>
      </b-form>
    </div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
  <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: "FormSitters",
  components: {
    Header,
    Footer,
  },

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
