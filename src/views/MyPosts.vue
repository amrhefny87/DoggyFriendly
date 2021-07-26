<template>
    <div class="dogs">
        <Header />
        <h1 class="mt-3">My Posts</h1>
        
        <Button root="/adtype" name="Add and Ad" />
        <div v-for="event in events" :key="event.id"  class="d-flex flex-column align-items-center">
            <NewPost :key="event.id"  :result="event" :type="type" />
            
        </div>
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import NewPost from '@/components/NewPost.vue'
import {apimyPosts} from '@/apis/ApiMyPosts';
import Button from '@/components/Button.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: 'MyPosts',
    components: {
        NewPost,
        Button,
        Header,
        Footer,
    },
    data(){
        return{
        id:'', 
        events:[]
        }
},

mounted(){
    this.fetchApi()
},

methods:{
    async fetchApi() {
        const res = await apimyPosts.myPosts(1);
        this.events = res.data
    }
    
}
}
</script>

<style scoped>
#buttonDogs {
    background: #e07a1b;
}

#buttonDogs:hover {
    background: #e07f24;
}
#button1{
    background: #EE8B16;
}

.dogs {
    background-image: url("../assets/background1.png");
}
</style>
