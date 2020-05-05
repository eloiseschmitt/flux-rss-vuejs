<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <Liste />
    </div>
  </div>
</template>

<script>
import Liste from "./components/sidebar/liste.vue";

export default {
  name: "App",
  components: {
    Liste
  }
};
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
