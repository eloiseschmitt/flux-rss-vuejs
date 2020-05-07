<template>
  <div class="col-10">
    <h1>Today</h1>
    <b-tabs content-class="mt-3">
      <b-tab title="Me" active>
        <div class="row">
          <div class="col-4" v-for="(feed, index) in feeds" :key="index">
            <b-card
              :title="feed.title[0]._"
              img-src=""
              img-alt=""
              style="max-width: 20rem;"
              class="mb-2"
              >
              <b-card-text>
                {{ feed.content[0]._ }}
              </b-card-text>
              <b-button :href="feed.link[0].$.__ob__.value.href" variant="primary">Voir l'article</b-button>
            </b-card>
          </div>
        </div>
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
export default {
  data() {
    return {
      feeds: [],
    }
  },
  mounted() {
        let parseString = require('xml2js').parseString;
        this.axios
          .get('https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500446')
            .then(response => {
              let self = this;
                parseString(response.data, function (err, result) {
                self.feeds = result.feed.entry
                console.log(result);
    }); 
            })
            .catch(error => console.log(error)); 
  },
  name: 'today',
};
</script>

<style>
</style>