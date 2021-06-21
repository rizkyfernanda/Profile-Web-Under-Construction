<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  background-color: #FFC04C;
  font-family: lato;
  font-size: 110%;
}
</style>
