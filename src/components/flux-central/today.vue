<template>
  <div class="col-10">
    <h1>Feed du jour - {{ date | formatDate }} </h1>
    <b-tabs content-class="mt-3">
      <b-tab :title="category" active>
        <div class="row">
          <div class="col-4" v-for="(feed, index) in feeds" :key="index">
            <b-card
              img-src=""
              img-alt=""
              style="max-width: 20rem;"
              class="mb-2"
              >
              <b-card-title v-html="feed.title[0]._"></b-card-title>
              <b-card-text v-html="feed.content[0]._">
              </b-card-text>
              <b-button :href="feed.link[0].$.__ob__.value.href" target="_blank" variant="primary">Voir l'article</b-button>
            </b-card>
          </div>
        </div>
      </b-tab>
      <b-tab title="Explorer">
        <p>Explore</p>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'today',
  computed: {
    feeds() {
      return this.$store.getters.getCategoryByUrl[0].details;
    },
    category() {
      return this.$store.getters.getCategoryByUrl[0].name[0];
    },
    date() {
      return new Date();
    }
  }
};
</script>

<style>
</style>