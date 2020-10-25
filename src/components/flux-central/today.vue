<template>
  <div class="col-10">
    <h1>Feed du jour</h1>
    <b-tabs content-class="mt-3">
      <b-tab :title="type" active>
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
let parseString = require('xml2js').parseString;
export default {
  mounted() {
        this.axios
          .get('https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500446')
          .then(response => {
              let self = this;
                parseString(response.data, function (err, result) {
                self.type = result.feed.title[0]
                self.feeds = result.feed.entry
                }); 
          })
          .catch(error => console.log(error)); 
  },
  name: 'today',
  data() {
    return {
      type: '',
      feeds: [],
    }
  },
  computed: {
    categorie() {
        return this.$store.state.cat
    },
    url() {
        return this.$store.state.url
    }
  },
  watch: {
    url(val) {
      this.getFeed(val);
    }
  },
  methods: {
    getFeed(url) {
        this.axios
          .get(url)
          .then(response => {
              let self = this;
                parseString(response.data, function (err, result) {
                  console.log(result.feed)
                self.type = result.feed.title[0]
                self.feeds = result.feed.entry
                }); 
          })
          .catch(error => console.log(error)); 
    }
  }
};
</script>

<style>
</style>