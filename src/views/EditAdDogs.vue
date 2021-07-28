<template>
  <div>
    <Header />
    <div class="p-5 d-flex flex-column align-items-center">
      <h2>Edit your Add</h2>
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
              v-model="form.date"
              required
              placeholder="Enter date"
              type="datetime-local"
              min="2011-06-01T08:30:00"
              max="2022-06-30T16:30:00"
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
            label-for="input-2"
            class="m-2 d-flex flex-column"
          >
          <input type="file" accept="image/*" @change="uploadImage($event)" id="input-2" placeholder="">
          </b-form-group>

          <b-button type="submit" id="buttonEdit" class="m-2"
            >Update</b-button
          >
          <b-button type="reset" id="buttonReset" class="m-2">Reset</b-button>
        </b-form>
        <ButtonGoBack />

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NewAd from "../components/NewAd";
import FormDogs from "../views/FormDogs";
import { auth } from '@/apis/auth'
import { apidogs } from "@/apis/ApiDogs";
import ButtonGoBack from "../components/ButtonGoBack.vue";
import Footer from "@/components/Footer.vue";



export default {
  name: "EditAd",
  components: {
    Header,
    NewAd,
    FormDogs,
    ButtonGoBack,
    Footer,
  },
  props: ["id", "title", "description", "comments", "image", "date", "name"],

  data() {
    return {
      form: {
        name: this.name,
        title: this.title,
        description: this.description,
        comments: this.comments,
        image: this.image,
        date: this.date
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
      await apidogs.editEvent(this.id,this.form);
      return this.$router.push("/mypostsdogs")
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

<style></style>
