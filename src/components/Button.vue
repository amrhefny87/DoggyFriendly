<template>
    <router-link :to=root class="btn text-white m-2 rounded-top rounded-bottom" id="button1">
      <img src={{name}}>
    </router-link>
</template>

<script>
export default {
  name: 'Button',
  props: 
    [
    "root",
    "name"
    ],
}
</script>