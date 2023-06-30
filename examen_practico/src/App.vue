<template>
  <narvar/>
  
  <router-view></router-view>
  
</template>

<script>

import narvar from './shared/componentes/narvar.vue';

export default {
  name: 'App',
  components: {
    narvar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
