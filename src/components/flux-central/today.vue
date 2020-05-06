<template>
  <div class="col-10">
    <h1>Today</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="Me" active>
        <Feed />
      </b-tab>
      <b-tab title="Explore">
        <p>Explore</p>
      </b-tab>
      <b-tab title="Autre">
        <p>Autre ?</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Feed from '../feed/Feed.vue'
export default {
  name: 'today',
  components: {
      Feed,
  },
  data() {
      return {
          feedUrl: 'https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500446',
          name: 'Google alert Galaxie',
          limit: 5,
      }
  }
};
</script>

<style>
</style>