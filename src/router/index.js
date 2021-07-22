import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dogs from "../views/Dogs.vue";
import Sitters from "../views/Sitters.vue";
import FormDogs from "../views/FormDogs.vue";
import FormSitters from "../views/FormSitters.vue";
import AdType from "../views/AdType.vue";
import Profils from "../views/Profils.vue";
import Show from "../views/Show.vue";
import EditAdDogs from "../views/EditAdDogs.vue";
import EditAdSitters from "../views/EditAdSitters.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sitters",
    name: "Sitters",
    component: Sitters,
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: Dogs,
  },
  {
    path: "/formdogs",
    name: "formdogs",
    component: FormDogs,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
      }
      if (!store.getters["auth/authenticated"]) {
        next({
          name: "Login",
        });
      }
      next();
    },
  },
  {
    path: "/formsitters",
    name: "formsitters",
    component: FormSitters,
    beforeEnter: (to, from, next) => {
      if (store.getters["auth/authenticated"]) {
      }
      if (!store.getters["auth/authenticated"]) {
        next({
          name: "Login",
        });
      }
      next();
    },
  },
  {
    path: "/profils",
    name: "profils",
    component: Profils,
  },
  {
    path: "/adtype",
    name: "adtype",
    component: AdType,
  },
  {
    path: "/show/:id",
    name: "Show",
    component: Show,
    props: true,
  },
  {
    path: "/editAdSitters/:id",
    name: "EditAdSitters",
    component: EditAdSitters,
    props: true,
  },
  {
    path: "/editAdDogs/:id",
    name: "EditAdDogs",
    component: EditAdDogs,
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
