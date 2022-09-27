

<template>
      <!-- <headers /> -->
      <!-- <jsMap /> -->
      <!-- <days /> -->
      <router-view></router-view>
</template>
<script setup>
  import headers from '@/components/header/index.vue'
  import jsMap from '@/components/jsMap/index.vue'
  import days from '@/components/touch/index.vue'

</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>
