<template>
  <div id="app">
    <Menu />
    <div class="container col-10">
      <SlideShow />
      <Content />
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import SlideShow from "./components/SlideShow";
import Content from "./components/Content";

export default {
  name: "App",
  components: {
    Menu,
    SlideShow,
    Content
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
