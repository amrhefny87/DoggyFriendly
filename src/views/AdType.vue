<template>
  <div class="d-flex flex-column align-items-center">
    <Header/>
  <div class="p-5 d-flex flex-column align-items-center">
    <h2>What type of ad do you want to create?</h2>
    <div id="formDogContainer" class="border border-dark p-5 mt-5 shadow">
        <div class="btn-group-vertical align-items-center">
        <Button root="/formdogs" name="DOGS" class="m-3" />
        <Button root="/formsitters" name="SITTERS" class="m-3" />
        </div>
    </div>
  </div>
  <Footer />
  </div>

</template>
<script>
import Button from '@/components/Button.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";


export default {
    name: "AdType",
    components: {
        Button,
        Header,
        Footer,
    },
}
</script>
<style scoped>
#formDogContainer {
  background: #F7A440;
  border-radius: 20px;
  max-width:500px;
  width: 100%;
  margin-bottom: 100px;
}
#button1{
  background: #E1701A;
}
</style>
