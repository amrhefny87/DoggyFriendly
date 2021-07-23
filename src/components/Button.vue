<template>
    <router-link :to=root class="" id="button1">
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