<template>
<div class="content-container">
     <SlideShow />
    <Content />
</div>
   
</template>

<script>
import SlideShow from "./SlideShow";
import Content from "./Content";


export default {
  name: "App",
  components: {
    SlideShow,
    Content
  
  }
};
</script>
<style scoped>
    .content-container{
        margin-top: 75px;
    }
</style>