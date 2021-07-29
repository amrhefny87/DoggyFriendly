<template>
    <router-link
        :to="{
        name: 'MyPostsDogs',
        
        }"
        class="btn text-white m-2 rounded-top rounded-bottom"
        id="buttonMyPostsDogs"
        >MyPostsDogs</router-link>
</template>

<script>
export default {
    name: "ButtonMyPostsDogs",
    
};
</script>

<style scoped>
#buttonMyPostsDogs {
    background: #a15106;
}

</style>
