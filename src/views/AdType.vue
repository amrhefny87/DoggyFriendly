<template>
  <div class="p-5">
    <h2>Whar type of ad do you want to create?</h2>
    <div id="formDogContainer" class="border border-dark">
        <div class="btn-group-vertical align-items-center">
        <Button root="/formdogs" name="DOGS" />
        <Button root="/formsitters" name="SITTERS" />
        </div>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button.vue'

export default {
    name: "AdType",
    components: {
        Button
    },
}
</script>
<style scoped>
#formDogContainer {
  background: #F7A440;
  padding: 80px 0;
  border-radius: 20px;
  width: 100%;
}
#button1{
  background: #E1701A;
}
</style>
