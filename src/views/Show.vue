<template>
  <div class="container p-5">
    <div class="card p-5" style="background-color: #E07A1B; ">
    <div class="box d-flex justify-content-around">
        <div class="box1 d-flex flex-column">
            <a href="http://www.goggle.com">
                <img class="img-fluid" src="../assets/profil.png" alt="">
            </a>
            <!-- <button >Profile</button> -->
        </div>
        <div class="box2">
            <h1>Name:</h1>
            <h2>Direction:</h2>
            <img src="../assets/stars.png" alt="">
        </div>
    </div>   
    <div class="info d-flex justify-content-around mt-2 px-5 mx-5">
        <div class="description-name text-left">
            <h2 class="special-p">Description</h2> 
        </div>
        <div class="info-p text-justify">
            <p class="description-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi, soluta tenetur accusamus porro voluptatum? Ad animi in facilis nulla ab quaerat vero! Quos hic eius, sint blanditiis dolorum quod aliquam delectus. A quos sint qui unde deleniti dolores odio maxime eligendi at! Fugit rerum incidunt enim optio tenetur dolorum.</p>
        </div>
    </div>  
    <div class="time mr-5 d-flex">
        <div>
            <p class="time-p">I want a caregiver at</p> 
        </div>
        <div>
            <p class="time-time">7pm on friday 21/7/2021</p>
        </div>
    </div> 
    <div class="time mr-5 d-flex">
        <div>
            <p class="time-p">Pet's Name</p>
        </div>
        <div>
            <p class="time-time">London</p>
        </div>
    </div>

    <div class="info d-flex justify-content-around mt-5">
        <div class="">
            <p class="special-p">Special Comments</p> 
        </div>
        <div class="description-p">
            <p class="description-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique excepturi, soluta tenetur accusamus porro voluptatum? Ad animi in facilis nulla ab quaerat vero! </p>
        </div>
    </div>
    <div>
        <button class="button-contact">Contact</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
    border: black;
}
.box{
    width: 90%;
    height: 20%;
}
.info{
    width: 100%;
    height: 30%;
}
.info-description{
    font-size: 22px;
    font-weight: bold;
    text-align:start ;
    width: 30vh;
}

.info-p{
    
}

.description-name{
    width: 80%;
}
.description-p{
    width: 90%
}

.profile-image{
    max-width: 40vh;
    min-width: 40vh;
    height: auto;
}

.about-time{
    width: 100%;
}

.special-p {
    font-size: 22px;
    font-weight: bold;
    text-align:start ;
    width: 50%;
}

.time{
    width: 100%;
}

.time-p{
    font-size: 18px;
    font-weight: bold;
    text-align:start ;
    width: 50%;
}
.time-time{
    text-align:start;
    width: 90%;
}
.pet {
    width: 100%;
}
.pet-p{
    font-size: 18px;
    font-weight: bold;
    text-align:start ;
    width: 50%;
}

.pet-name{
    text-align:start ;
    width: 90%;
}

.button-contact{
    background-color:#F7A440;
    border-radius: 18px;
    width: 20vh;
    font-size: 20px;
    box-shadow: 4px 4px 4px rgba(158, 151, 151, 0.25);

}
</style>