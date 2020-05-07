<template>
  <aside class="sidebar" :class="{ collapse: collapse }">

      <h1 class="brand">
           <a href="/">
            <svg>...</svg>
            <span class="brand-name">
                <span class="brand-primary">Q</span>Reader
            </span>
           </a>
      </h1>
      <!-- end brand -->

      <b-nav :router="true" vertical>
          ...
          <b-list-group title="Channels">
            ...
            <b-list-group-item v-for="(item, index) in channels"
              :index="index.toString()"
              :key="index"
              :route="{ name: 'Channel', params: { title: slug(item.channel.title), index: index }}">
                <b-tooltip class="item" :content="item.channel.title" placement="right">
                 <img :src="getFavicon(item.channel.link)" alt="">
                </b-tooltip> <span>{{ item.channel.title }}</span>
            </b-list-group-item>
          </b-list-group>
      </b-nav>
      <!-- end side menu -->
      ....
  </aside>
  <!-- end sidebar -->
</template>
<script>
  import { common } from '../utils';

  export default {
    methods: {
      toggleChannelDialog() {
        this.$store.commit('TOGGLE_ADD_CAHNNEL');
      },
      slug(str) {
        return common.slug(str);
      },
      getFavicon(url) {
        return 'https://www.google.com/s2/favicons?domain_url=' + url
      },
      collaseSideBar() {
        this.$store.commit('TOGGLE_SIDEBAR')
      }
    },
    computed: {
      channels () {
        return this.$store.getters.channels;
      },
      favCount() {
        return this.$store.getters.favCount;
      },
      currentIndex() {
        if( this.$route.name === 'Favs' ) return 'favorites';
        return this.$route.params.hasOwnProperty('index') ? this.$route.params.index.toString() : '/';
      },
      collapse() {
        return this.$store.getters.collapse;
      }
    }
  }
</script>