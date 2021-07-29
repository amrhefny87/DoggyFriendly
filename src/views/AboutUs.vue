<template>
  <div>
    <Header />
    <div class="header">
      <div class=" mb-2">
        <h4><strong>About Us</strong></h4>
      </div>
      <div class="d-flex flex-column align-items-center">
        <h5 class="mt-3">
          {{ info.title }}
        </h5>
        <h6 class="h6 mt-3">
          {{ info.description }}
        </h6>
        <h5 class="mt-3">{{ info.title2 }}</h5>
        <h6 class="h6 m-3 ">{{ info.description2 }}</h6>
      </div>
    </div>
    <h4 class="mt-4"><strong>Meet our team</strong></h4>
    <div class="body d-flex flex-lg-row">
      <div class="card " v-for="item in items" :key="item.message">
        <div class="imgBox">
          <img :src="item.imageDog" />
          <img :src="item.imageMe" alt="" />
        </div>
        <div class="details">
          <div class="content">
            {{ item.namePerson }}
            <div>
              <p class="infoCard">{{ item.profession }}</p>
              <p class="infoCard">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Niki from "@/assets/DogMartin.png";
import Martin from "@/assets/martin.jpg";
import Pingo from "@/assets/DogCris.jpg";
import Cris from "@/assets/cris.jpg";
import janna from "@/assets/janna.jpg";
import janna1 from "@/assets/janna1.jpg";
import thierno from "@/assets/thierno.jpeg";
import Amr1 from "@/assets/Amr1.jpeg";
import Amr from "@/assets/Amr.jpeg";
import conejo from "@/assets/conejo.jpeg";
import crock from "@/assets/crock.jpg";
export default {
  name: "aboutus",
  components: {
    Header,
    Footer,
    Niki,
    Martin,
    Pingo,
    Cris,
    thierno,
    janna,
    janna1,
    Amr,
    Amr1,
    conejo,
    crock,
  },
  data() {
    return {
      info: {
        title:
          "Welcome to DoggyF, the App for doggy-lovers. The couchsurfing for dogs",
        description:
          "Do you lack time to take care or walk your dog? Would you like to walk other people's dog? Would you like to help create an altruistic community ofdoggy-lovers?",
        title2: "In DoggyF you will find the answers!",
        description2:
          "In order to participate in the DoggyF community, the first thing you must do is register as a user.From there, you can edit post ads according to the Dogs or Sitters category and contact other users.If not, you can only consult the published announcements.",
      },
      items: [
        {
          namePerson: "Martín Madridejos",
          profession: "Doggy-lover and programmer",
          description: "I love bothering dogs",
          imageDog: Niki,
          imageMe: Martin,
        },
        {
          namePerson: "Thierno",
          profession: "Graphic designer and Doggy-lover",
          description: "My rabbit is my live",
          imageDog: conejo,
          imageMe: thierno,
        },
        {
          namePerson: "Cris Mouta",
          profession: "Doggy-lover and programmer",
          description: "To err is human — to forgive, canine.",
          imageDog: Pingo,
          imageMe: Cris,
        },
        {
          namePerson: "Amr",
          profession: "Graphic designer and Doggy-lover",
          description: "Animacion and shisha",
          imageDog: Amr1,
          imageMe: Amr,
        },
        {
          namePerson: "Zhanna",
          profession: "Doggy-lover and Graphic designer",
          description: "Future for all with animal",
          imageDog: janna,
          imageMe: janna1,
        },
        {
          namePerson: "Abdulha",
          profession: "Programmer and and Doggy-lover",
          description: "More programming and walks",
          imageDog: crock,
          imageMe: Martin,
        },
      ],
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.body {
  margin: 20px;
  min-height: 100vh;
  background: #E9A14C;
  flex-wrap: wrap;
}
p {
  margin-top: 20px;
  margin-bottom: 20px;
}
.card {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  width: 250px;
  height: 350px;
  background: white;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 10px 20px 40pc rgba(0, 0, 0, 0.25);
  transition: 1s;
 margin: 100px;
  padding: 5px;
}
.card:hover {
  transform: translateX(50%);
}
.card .imgBox {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  background: black;
  transition: 1s;
  box-shadow: 10px 20px 40pc rgba(0, 0, 0, 0.25);
}
.card:hover .imgBox {
  transform: rotateY(-180deg);
}
.card .imgBox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
.card .imgBox img:nth-child(2) {
  transform: rotateY(180deg);
}
.card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 5px;
}
.card .details .content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.details {
  font-size: 15px;
}
@media (max-width: 420px) {
  body{
display: flex;
justify-content: center;
align-items: center;
margin: 0;
  }
  .card {
    justify-content: center;
    align-items: center;
    position: relative;
    width: 140px;
    height: 180px;
    background: white;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40pc rgba(0, 0, 0, 0.25);
    transition: 1s;
    margin: 20px;
    margin-left: 130px;
  }
.infoCard {
  width: 100px;
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
}
}
</style>