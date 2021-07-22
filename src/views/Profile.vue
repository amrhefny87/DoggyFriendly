<template>
<div class="all d-flex ">
    <Header />
    <div class="all_info">
            
        <div class="profil"> 
            <img class="img" src="../assets/profil.png" alt="Foto">
            <div class="item item_3 mb-3">
                <div class="title_form float-start"><strong>Name</strong></div>
                <div class="title-input float-start">Bojaninna Doe</div>
                <img class="stars" src="../assets/stars.png" alt="">  
            </div>
            
            <div class="item item_3 mb-3">
                <div class="title_form float-start"><strong>Direction</strong></div>
                <div class="direction-input">Calle Valencia, 29, Barcelona</div>
            </div>

            <div class="item item_3 mb-3">
                <div class="title_form"><strong>About Us</strong></div>
                <div class="about-us"><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus eaque recusandae yes.</p></div>
            </div>

            
        </div>
        <section class="contact d-flex justify-content-center">
                <img class="img_contact" src="../assets/whatsapp 1.png" alt="fffff">
                <img class="img_contact2" src="../assets/email 1.png" alt="fffff">
        </section>
        
    </div>
    <Footer />
</div>

  
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: 'profile',
  components: {
    
    Header,
    Footer

  },

}
</script>

<style>


.all{
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    
}
.all_info{
   
    
    border:1px solid darkblue;
    background-color: #EE8B16;
    border-radius:30px 30px 30px 0px ;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 30px;
    width: 60%;
    filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));
}
.img{
  
    width: 40%;
    height: auto;
    margin:auto;
    margin-bottom: 10px;
}
.stars{
    margin-left: 10px;
    margin-top: -5px;
    min-width: 5vh;

}
.profil{
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    min-width: 80%;
}
.title_form{
    min-width:30%;
}
.title-input{
    min-width:50%;
}
.direction-input{
    max-width:70%;
}

strong{
    width: 15px;
    padding-right: 10px;
}
.item{
    margin: auto;
    width: 90%;
}
.item_3{
    display: flex;
}
.btn{
    margin-top: 60px;
}
.contact{
    display: flex;    
    margin-top: 20px; 
    min-width: 50%;
   
}
.contact img{
  
    
}

.img_contact{
    
    width: 50px;
    height: 50px;
    
    filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.25));
    
}

.img_contact2{
    
    width: 50px;
    height: 50px;
    margin-left: 10vh;
    filter: drop-shadow(5px 5px 1px rgba(0, 0, 0, 0.25));
    
}
.about-us {
    max-width:70%;
}

p
{
    width: 220px;
}

</style>