<template>
<div class="edit-profile">
    <Header />
    <div class="p-5 d-flex flex-column align-items-center">
      <h2>Edit your profile</h2>
      <div id="formDogContainer"   class="shadow">
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
            class="m-2 text-left"
          >
            <b-form-input
              id="input-2"
              v-model="form.phone"
              placeholder="Phone Number"
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
              v-model="form.about_us"
              placeholder="about_us"
              required
            ></b-form-textarea>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label-for="input-2"
            class="m-2 d-flex flex-column"
          >
          <input type="file" accept="image/*" @change="uploadImage($event)" id="input-2" placeholder="" style="max-width: 250px;" required>
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
import { auth } from '@/apis/auth'

export default {
    name: "editprofile",
    
    components: { Header, Footer},
     props: ["id", "name", "direction", "image", "about_us", "password", "phone"],

  data() {
    return {
      form: {
        name: this.name,
        direction: this.direction,
        about_us: this.about_us,
        image: this.image,
        date: this.date,
        password: this.password,
        phone: this.phone,
      },
      show: true,
      imageArray: null
    };
  },
  methods: {
    uploadImage(event) {
      this.imageArray = event.target.files[0]
  },
  async saveImage() {
      let fd = new FormData()
      fd.append("image", this.imageArray)
      await auth.uploadImage(fd).then(res => {
          this.form.image = "http://127.0.0.1:8000/storage/" + res.data
      }).catch(err => console.log(err)) 
  },
    async onSubmit(event) {
      event.preventDefault();
      await this.saveImage()
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

