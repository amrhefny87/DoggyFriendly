<template>
    <div class="NewAdd d-flex flex-row">
        <b-card
        class="overflow-hidden pr-2 pl-2 pb-1 pt-2  shadow "
        style="max-width: 540px; background: #e07a1b; margin-right: 30px; margin-left:30px; margin-top: 15px; margin-bottom: 10px; border-radius: 20px"
        >
        <b-row no-gutters class="d-flex align-items-center ">
            <b-col md="6">
            <b-card-img
                :src="result.image"
                alt="Image"
                style="border-radius: 20px"
                id="img"
            ></b-card-img>
            </b-col>
            <b-col md="6" >
            <b-card-body class="d-flex justify-content-center align-items-center d-flex flex-column">
                <h2 id="textitle">{{ result.title }}</h2>
                <b-card-text id="text">
                {{ result.description }}
                </b-card-text>
                <div class="d-flex flex-wrap justify-content-center align-items-center">
                
                <div v-if="type === 'Dogs'">
                <router-link
                :to="{
                    name: 'EditAdDogs',
                    params: {
                    id: result.id,
                    title: result.title,
                    description: result.description,
                    comments: result.comments,
                    image: result.image,
                    date: result.date,
                    name: result.name,
                    },
                }"
                class="moreInfo btn text-black m-3 "
                id="buttonMore"
                >Edit</router-link
                >
                </div>
                <div v-if="type === 'Sitters'">
                <router-link
                :to="{
                    name: 'EditAdSitters',
                    params: {
                    id: result.id,
                    title: result.title,
                    description: result.description,
                    comments: result.comments,
                    image: result.image,
                    date: result.date,
                    name: result.name,
                    },
                }"
                class="moreInfo btn text-black m-3 "
                id="buttonMore"
                >Edit</router-link
                >
                </div>
                <div v-if="type === 'Dogs'">
                <b-button @click="buttonDeleteDogs" id="deletemyEvent" class="m-2"
                >Delete</b-button
                >
                </div>
                <div v-if="type === 'Sitters'">
                <b-button @click="buttonDeleteSitters" id="deletemyEvent" class="m-2"
                >Delete</b-button
                >
                </div>
                </div>
            </b-card-body>
            </b-col>
        </b-row>
        </b-card>
    </div>
</template>

<script>
import { apidogs } from "@/apis/ApiDogs";
import { apisitters } from "@/apis/ApiSitters";

export default {
    name: "NewPost",
    props: ["result", "type"],
    mounted() {},
    methods: {
        async buttonDeleteDogs() {
        await apidogs.delete(this.result.id);
        return (this.$router.replace({
         name: "Dogs"
       }) );
        },
        async buttonDeleteSitters() {
        await apisitters.delete(this.result.id);
        return (this.$router.replace({
         name: "Sitters"
       }) );
        },
    },
};
</script>
<style scoped>
.pet {
    height: 18vh;
}

h3 {
    font-size: 13px;
}
h4 {
    font-size: 9px;
}

#img {
    width: 80px;
}

#buttonMore {
    background: #eab474;
}

#buttonMore:hover {
    background: #a15106;
}

#text {
    color:black;
    font-size: 12px;
}

#textitle {
    color:black;
    font-size: 15px;
    font-weight: bold;
}

@media screen and (min-width: 500px) {
    #img {
        width: 200px;
    }
}
</style>