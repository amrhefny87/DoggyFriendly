import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dogs from '../views/Dogs.vue'
import Sitters from '../views/Sitters.vue'
import FormDogs from '../views/FormDogs.vue'
import FormSitters from '../views/FormSitters.vue'
import AdType from '../views/AdType.vue'
import Profile from '../views/Profile.vue'
import Show from '../views/Show.vue'
import EditAdDogs from "../views/EditAdDogs.vue"
import EditAdSitters from "../views/EditAdSitters.vue"
import Login from "../views/Login";
import Register from "../views/Register";
import store from "../store";
import Logged from "../views/Logged"
import ProfileOther from "../views/ProfileOther";
import AboutUs from "../views/AboutUs";
import EditProfile from "../views/EditProfile";
import ProfileMenu from "../components/ProfileMenu"

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
      if (store.getters["auth/authenticated"]) {}
      else {
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
      if (store.getters["auth/authenticated"]) {}
      else {
        next({
          name: "Login",
        });
      }
      next();
    },
  },
  {

    path:'/profile/',
    name:'profile',
    component: Profile,
    
  },
  {

    path:'/editprofile/:id',
    name:'editprofile',
    component: EditProfile,
    props: true,
    
  },

  {

    path:'/profileother',
    name:'profile-other',
    component: ProfileOther,
    
  },
  {
    path: "/adtype",
    name: "adtype",
    component: AdType,
  },
  {
    path: "/show/:id/",
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
  {
    path: "/logged",
    name: "Logged",
    component: Logged,
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: AboutUs,
  },
  {
    path: "/profilemenu",
    name: "ProfileMenu",
    component: ProfileMenu,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
