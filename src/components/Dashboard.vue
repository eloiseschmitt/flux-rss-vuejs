<template>
  <div class="inner full-height">
      <div class="jumbotron">
          <h2 class="greet">Hi, QReader!</h2>

          <blockquote>
            {{ randomQuote[0] }}
            <br>
            <em>{{ randomQuote[1] }}</em>
          </blockquote>
          <!-- quote ends -->

          <p>Lets get started by adding a channel</p>

          <b-button
            :plain="true"
            type="text"
            @click="openChannelBox()">
            <i style="color:green" class="el-icon-plus"></i>
            Add a Channel
          </b-button>

      </div>
      <!-- end jumbotron -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showChannelDialog: false,
      }
    },
    methods: {
      openChannelBox() {
        this.$store.commit('TOGGLE_ADD_CAHNNEL');
      }
    },
    computed: {
      randomQuote() {
          let quote = this.$store.getters.quotes[Math.floor((Math.random()*this.$store.getters.quotes.length))];
          return quote.split('--');
      }
    }
  }
</script>