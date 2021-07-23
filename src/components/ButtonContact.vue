<template>
    <button
        class="btn text-white m-2 rounded-top rounded-bottom"
        id="buttonContact"
        @click="goBack()"
    >
        Contact
    </button>
</template>

<script>
export default {
    name: "buttonContact",
    methods: {
        goBack() {
        window.history.back();
        },
    },
};
</script>

<style>
#buttonContact {
    background: #5c636a;
}
#buttonContact:hover {
    background: #a15106;
}
</style>
