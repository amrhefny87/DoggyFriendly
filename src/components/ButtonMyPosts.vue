<template>
    <router-link
        :to="{
        name: 'MyPosts',
        
        }"
        class="btn text-white m-2 rounded-top rounded-bottom"
        id="buttonMyPosts"
        >MyPosts</router-link>
</template>

<script>
export default {
    name: "ButtonMyPosts",
    
};
</script>

<style>
#buttonMyPosts {
    background: #5c636a;
}
#buttonMyPosts:hover {
    background: #a15106;
}
</style>
