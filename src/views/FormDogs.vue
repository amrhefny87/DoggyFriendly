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
          class="m-2"
          id="input-group-2"
          label=""
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.date" required
            placeholder="Enter date" type="datetime-local"
            min="2011-06-01T08:30:00" max="2022-06-30T16:30:00"
           pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
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
          <b-form-textarea
            id="input-2"
            v-model="form.image"
            placeholder=""
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" id="buttonSubmit" class="m-2">Submit</b-button>
        <b-button @click="editmyEvent" id="buttonEdit" class="m-2">Edit</b-button>
        <b-button @click="deletemyEvent" id="buttonDelete" class="m-2">Delete</b-button>
        <b-button type="reset" id="buttonReset" class="m-2">Reset</b-button>
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
      console.log(this.form.image)
      await apidogs.create(this.form);
      return window.location.href =  "dogs"
    },
    async editmyEvent() {
      await apidogs.editEvent(11, this.form)
      return window.location.href =  "dogs"
  },
    onReset(event) {
      event.preventDefault();
      this.form.description = "";
      this.form.name = "";
      this.form.title = "";
      this.form.comments = "";
      this.form.image = "";
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

#buttonEdit {
    background: #eab474;
}
#buttonSubmit {
    background: #eab474;
}
#buttonDelete {
    background: #eab474;
}
#buttonReset {
    background: #eab474;
}


</style>
