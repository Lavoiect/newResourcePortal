<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="navbar-collapse collapse order-1 order-md-0 dual-collapse2">
      <a class="navbar-brand mx-auto" href="#">Field Operations Resource Hub</a>
    </div>
    <div class="mx-auto order-0">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".dual-collapse2"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">TalentCenter</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kontiki</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NCTI</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SCTE</a>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  name: "Menu"
};
</script>

<style scoped>
</style>