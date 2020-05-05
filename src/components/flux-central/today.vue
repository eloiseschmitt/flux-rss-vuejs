<template>
  <div class="col-9">
    <h1>Today</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="First" active>
        <p>Me</p>
      </b-tab>
      <b-tab title="Second">
        <p>Explore</p>
      </b-tab>
      <b-tab title="Disabled" disabled>
        <p>Autre ?</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "today"
};
</script>

<style>
</style>