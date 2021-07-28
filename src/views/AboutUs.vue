<template>
  <div>
      <Header/>
      <div class="header">
          <div class="mb-3"><h3><strong>About Us</strong> </h3></div>
          <div><h5>Welcome to DoggyF, the App for doggy-lovers.
The couchsurfing for dogs.</h5>

<p class="info">Do you lack time to take care or walk your dog?<br>
Would you like to walk other people's dog?<br>
Would you like to help create an altruistic community of doggy-lovers?<br><br>
<strong><h5>In DoggyF you will find the answers!</h5></strong>
In order to participate in the DoggyF community, the first thing you must do is register as a user.<br>
From there, you can edit post ads according to the Dogs or Sitters category and contact other users.<br>
If not, you can only consult the published announcements.</p></div>
          
      </div>
 
<div class="body">
  
  <div class="card">
        <div class="imgBox">
           <img src="../assets/tiger2.jpg" alt="">
            <img src="../assets/tiger.jpg" alt="">
        </div>
        <div class="details">
            <div class="content">
                <h2>Big Tiger<br><span>Graphic Designer</span>
                <p>I'm a tiger and I like eat meat and sleep. My favorite game is hunt!!!</p></h2>
                <div class="icons">
                    <a href="#">
                        <i class="fa fa-bicycle" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-camera" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-bug" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i></a>            
                </div>
            </div>    
        </div>       
    </div>
    <span>Cris M.</span>
    <div class="card">
        <div class="imgBox">
           <img src="../assets/tiger2.jpg" alt="">
            <img src="../assets/tiger.jpg" alt="">
        </div>
        <div class="details">
            <div class="content">
                <h2>Big Tiger<br><span>Graphic Designer</span>
                <p>I'm a tiger and I like eat meat and sleep. My favorite game is hunt!!!</p></h2>
                <div class="icons">
                    <a href="#">
                        <i class="fa fa-bicycle" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-camera" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-bug" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i></a>            
                </div>
            </div>    
        </div>
    </div>
    <span>Martin M.</span>
    <div class="card">
        <div class="imgBox">
           <img src="../assets/tiger2.jpg" alt="">
            <img src="../assets/tiger.jpg" alt="">
        </div>
        <div class="details">
            <div class="content">
                <h2>Big Tiger<br><span>Graphic Designer</span>
                <p>I'm a tiger and I like eat meat and sleep. My favorite game is hunt!!!</p></h2>
                <div class="icons">
                    <a href="#">
                        <i class="fa fa-bicycle" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-camera" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-bug" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i></a>            
                </div>
            </div>    
        </div>
    </div>
    <span>Amr H</span>
    <div class="card">
        <div class="imgBox">
           <img src="../assets/tiger2.jpg" alt="">
            <img src="../assets/tiger.jpg" alt="">
        </div>
        <div class="details">
            <div class="content">
                <h2>Big Tiger<br><span>Graphic Designer</span>
                <p>I'm a tiger and I like eat meat and sleep. My favorite game is hunt!!!</p></h2>
                <div class="icons">
                    <a href="#">
                        <i class="fa fa-bicycle" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-camera" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-bug" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i></a>            
                </div>
            </div>    
        </div>
    </div>
    <span>Thierno D</span>
    <div class="card">
        <div class="imgBox">
           <img src="../assets/crock1.webp" alt="">
            <img src="../assets/crock.jpg" alt="">
        </div>
        <div class="details">
            <div class="content">
                <h2>Big Tiger<br><span>Graphic Designer</span>
                <p>I'm a tiger and I like eat meat and sleep. My favorite game is hunt!!!</p></h2>
                <div class="icons">
                    <a href="#">
                        <i class="fa fa-bicycle" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-camera" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-bug" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i></a>            
                </div>
            </div>    
        </div>
    </div>
    <span> Abdulha S</span>
    <div class="card">
        <div class="imgBox">
           <img src="../assets/cats.jpg" alt="">
            <img src="../assets/goast.jpg" alt="">
        </div>
        <div class="details">
            <div class="content">
                <h2>Big Tiger<br><span>Graphic Designer</span>

                <p>I'm a tiger and I like eat meat and sleep. My favorite game is hunt!!!</p></h2>
                <div class="icons">
                    <a href="#">
                        <i class="fa fa-bicycle" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-camera" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-bug" aria-hidden="true"></i></a>
                    <a href="#">
                        <i class="fa fa-globe" aria-hidden="true"></i></a>            
                </div>
            </div>    
        </div>
    </div>
   <span>Zhanna S</span>
  </div>
      <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
name: 'aboutus',
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
}
.header{

  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  margin-left: 30px;
  margin-right: 50px;
  padding: 130px;
  overflow: hidden;
}
h3{
  margin-top: 20px;
}
.info{
  width: 100vw;
}
span{
  visibility: hidden;
}
.body{

display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background: #e9a14c;
flex-wrap: wrap;

}
p{
    margin-top: 150px;
    margin-bottom: 50px;
    font-size: 20px;
}
.card{
    position: relative;
    width: 300px;
    height: 400px;
    background: white;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40pc rgba(0,0,0,0.25);
    transition: 1s;
    
    margin-top: 70px;
    margin-left: 140px;
}
.card:hover{
    transform: translateX(50%);
    
}
.card .imgBox{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform-origin: left;
    transform-style: preserve-3d;
    background: black;
    transition: 1s;   
    box-shadow: 10px 20px 40pc rgba(0,0,0,0.25); 
}
.card:hover .imgBox{
    transform: rotateY(-180deg);
   
}
.card .imgBox img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-style: preserve-3d;
    backface-visibility: hidden;
}
.card .imgBox img:nth-child(2){
    transform: rotateY(180deg);    
}
.card .details{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    margin-top: 20px; 
}
.card .details .content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.card .details .content h2{
    text-align: center;
    font-weight: 700;
    line-height: 1em;
}
.card .details .content h2 span{
    color :orange;
    font-size: 0.8em;
}
.card .details .content .icons{
    position: relative;
    display: flex;
    margin-top: 10px;
}
.card .details .content .icons a{
    display: inline-block;
    width: 35px;
    height: 35px;
    background: black;
    color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin:10px;
    font-size: 14px;
    transition: 0.2;   
}
.card .details .content .icons a:hover{
    background:orange;
}

@media (max-width:420px){
  span{
  visibility: visible;
}
  .card{
    position: relative;
    width: 150px;
    height: 200px;
    background: white;
    transform-style: preserve-3d;
    transform: perspective(1000px);
    box-shadow: 10px 20px 40pc rgba(0,0,0,0.25);
    transition: 1s;
    margin: 30px;
  }
  .card .details .content h2{
    text-align: center;
    font-weight: 700;
    line-height: 1em;
    font-size: 12px;
   
}

.card .details .content h2 span{
    color :orange;
    font-size: 0.8em;
    font-size: 10px;
    margin-bottom: 30px;
}

.card .details .content .icons{
    position: relative;
    display: flex;
    margin-top: 10px;
}

.card .details .content .icons a{
    display: inline-block;
    width: 20px;
    height: 20px;
    max-width: 100%;
    
    background: black;
    color: blanchedalmond;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin:5px;
    font-size: 14px;
    transition: 0.2;   
}

.card .details .content .icons a:hover{
    background:orange;
}
p{
    width: 100%;
    font-size: 10px;
    margin-top:30px;
}
.info{
  max-width: 80vw;
}
.header{
max-height: 45vh;
}
.header h3{
  font-size: 20px;
  width: 100vh;
  
}
.header h5{
 
  min-width: 70vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  
  font-size: 13px;
}
}
</style>