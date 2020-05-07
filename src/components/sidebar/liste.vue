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
    <b-list-group>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat('Galaxie')"
      >
        Galaxie
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat('Hubble')"
      >
        Hubble
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat('Jupiter')"
      >
        Jupiter
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat('Saturne')"
      >
        Saturne
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
        v-on:click="changeCat('Univers')"
      >
        Univers
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "liste",
  methods: {
    changeCat(categorie) {
      this.$store.commit("changeCat", categorie);
    }
  }
};
</script>

<style>
</style>