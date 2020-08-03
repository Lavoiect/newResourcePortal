<template>
  <div id="app">
    <Menu />
    <div class="container col-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";


export default {
  name: "App",
  components: {
    Menu,
  
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
