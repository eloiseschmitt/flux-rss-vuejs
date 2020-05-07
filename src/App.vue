<template>
  <div id="app" class="container-fluid">
    <section class="main row">
        <!-- sidebar -->
        <Liste></Liste>
        <Today></Today>
    </section>
  </div>
  <!-- end wrapper -->
</template>

<script>
import Liste from "./components/sidebar/Liste.vue";
import Today from "./components/flux-central/Today.vue";

export default {
  name: "App",
  components: {
    Liste,
    Today
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/app";
</style>
