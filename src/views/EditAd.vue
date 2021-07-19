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
              v-model="description"
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
              v-model="name"
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
              v-model="date"
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
              v-model="title"
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
              v-model="comments"
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
              v-model="image"
              placeholder=""
            ></b-form-textarea>
          </b-form-group>

          <b-button @click="editmyEvent()" id="buttonEdit" class="m-2"
            >Edit</b-button
          >
          <b-button type="reset" id="buttonReset" class="m-2">Reset</b-button>
        </b-form>
        <ButtonGoBack />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NewAd from "../components/NewAd";
import FormDogs from "../views/FormDogs";
import { apidogs } from "@/apis/ApiDogs";
import ButtonGoBack from "../components/ButtonGoBack.vue"


export default {
  name: "EditAd",
  components: {
    Header,
    NewAd,
    FormDogs,
    ButtonGoBack,
  },
  props: ["id", "title", "description", "comments", "image", "date", "name"],

  data() {
    return {
      form: {},
      show: true,
     
    };
  },
  methods: {
    async editmyEvent() {
      await apidogs.patch(this.result.id);
      return (window.location.href = "dogs");
    },
  },
};
</script>

<style></style>
