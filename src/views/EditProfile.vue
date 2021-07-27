<template>
<div>
    <Header />
    <div class="p-5 d-flex flex-column align-items-center">
      <h2>Edit your profile</h2>
      <div id="formDogContainer" class="shadow">
        <b-form @submit="onSubmit" @reset="onReset" >
          <b-form-group
            class="m-2"
            id="input-group-2"
            label=""
            label-for="input-2"
          >
            <b-form-textarea
              id="input-2"
               v-model="form.name"
              placeholder="Name"
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
              v-model="form.direction"
              placeholder="Direction"
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
              v-model="form.pet_name"
              placeholder="Pet name"
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
          <b-form-group
            id="input-group-2"
            label="Password"
            label-for="input-2"
            class="m-2 d-flex flex-column"
          >
            <b-form-textarea
              id="input-2"
               v-model="form.password"
              placeholder=""
            ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" id="buttonEdit" class="m-2"
            >Enviar</b-button
          >
          <b-button type="reset" id="buttonReset" class="m-2">Reset</b-button>
        </b-form>
       

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { apiusers } from "@/apis/ApiUsers";
export default {
    name: "editprofile",
    
    components: { Header, Footer},
     props: ["id", "name", "direction", "image", "pet_name", "password"],

  data() {
    return {
      form: {
        name: this.name,
        direction: this.direction,
        pet_name: this.pet_name,
        image: this.image,
        date: this.date,
        password: this.password,
      },
      show: true,
     
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await apiusers.editEvent(this.id,this.form);
      return window.location.href =  "http://localhost:8080/profile"
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.direction = "";
      this.form.pet_name = "";
      this.form.image = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>
