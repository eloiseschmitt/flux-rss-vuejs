<template>
  <div class="col-2">
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat('Dev')"
      >
        Dev
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>
    </b-list-group>

    <h3>Espace</h3>
    <b-list-group v-for="(category, i) in getCategories" :key="i">
        <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat(category.urlApi)"
      >
       {{ category.name[0] }}
        <b-badge variant="primary" pill>{{ category.numberOfArticles }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "liste",
  mounted() {
    this.$store.dispatch('getArticles');
  },
  computed: {
    ...mapGetters([
      'getCategories'
    ])
  },
  methods: {
    changeCat(categorie) {
      this.$store.commit("changeCat", categorie);
    }
  },
};
</script>

<style>
</style>