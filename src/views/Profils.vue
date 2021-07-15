<template>
<div class="all">
    <div class="all_info">
            
        <section class="profil"> 
            <img class="img" src="../assets/profil.png" alt="Foto">
            </img>
            <div class="item item_3">
                <div class="title_form"><strong>Name</strong></div>
                <div>Bojaninna Doe</div>
                <img class="stars" src="../assets/stars.png" alt="">    
            </div>
            
            <div class="item item_3">
                <div class="title_form"><strong>Direction</strong></div>
                <div>Calle Valencia, 29, Barcelona</div>
            </div>

            <div class="item item_3">
                <div class="title_form"><strong>About Us</strong></div>
                <div><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet temporibus eaque recusandae yes.</p></div>
            </div>

            
        </section>
        <section class="contact d-flex justify-content-between">
                <img class="img_contact" src="../assets/whatsapp 1.png" alt="fffff">
                <img class="img_contact" src="../assets/email 1.png" alt="fffff">
        </section>
        
    </div>
    
    
</div>

  
</template>

<script>
export default {
    

}
</script>

<style>

.all{
    display: flex;
    justify-content: center;
    
}
.all_info{
   
    align-items: center;
    border:1px solid darkblue;
    border-radius:25px ;
    margin: 20px;
    padding: 30px;
}
.img{
  
    width: 300px;
    height: 300px;
    margin:20px 10px;
}
.stars{
    margin:20px;
}
.profil{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title_form{
    margin-left: 20px;
}

strong{
    width: 15px;
    padding-right: 10px;
}
.item{
    margin-top: 30px;
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
   
}
.contact img{
  
    
}

.img_contact{
    
    width: 50px;
    height: 50px;
    
}

p
{
    width: 220px;
}

</style>