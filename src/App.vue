<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <Liste />
      <Today />
    </div>
  </div>
</template>

<script>
import Liste from "./components/sidebar/liste.vue";
import { common } from "./utils";
import Today from "./components/flux-central/today.vue";

export default {
  name: "App",
  components: {
    Liste,
    Today
  },
  computed: {
    showChannelDialog() {
      return this.$store.getters.showAddChannel;
    },
    channels() {
      return this.$store.getters.channels;
    },
    collapse() {
      return this.$store.getters.collapse;
    }
  },
  data() {
    return {
      loading: false,
      form: { ... },
      rules: { ... },
      query: ''
    }
  },
  methods: {
    toggleChannelDialog() {
         this.$store.commit('TOGGLE_ADD_CAHNNEL');
      },
    submit(form) {
        this.$refs[form].validate((valid) => {
          if (!valid) return false;

          this.loading = true;
          this.$store.dispatch('addChannel', { channel:  this.form }).then(res => {

              // hide the add channel box and show message
              this.toggleChannelDialog();
              this.$message({
                message: 'Congrats! ' + res.channel.title + ' channel has been added.',
                type: 'success'
              });

              // reset form
              this.form.url = '';
              this.loading = false;
              this.form.color = common.randomColor();

              // navigate to new channel
              this.$router.push({ name: 'Channel', params: {
                index: 0, title: res.channel.title.toLowerCase().replace(' ', '-')}
              });

            }).catch( (error) => {
                this.loading = false;
                let errorMsg = error.response ? error.response.data.msg : error;
                this.$message.error('Oops, ' + errorMsg);
            });
        });
      },
    clearSearchInput() {
        this.query = '';
      },
    querySearch(queryString, cb) {
          // get all channels
          var feeds = this.channels;

          // result holder
          let results = [];

          if( queryString ) {
            // search in all channels post titles
            feeds.forEach( (channel, channelIndex) => {
              let matched = channel.items.forEach( (post) => {
                  if(post.title.toLowerCase().indexOf(queryString.toLowerCase()) !== -1) {
                    results.push( {
                      value : post.title,
                      link: post.link,
                      channel: channel.channel.title,
                      channelIndex: channelIndex
                    });
                  }
              })
            })

            // call callback function to return suggestions
            cb(results);
          }
        },
    handleSelect(item) {
          // navigate to chosen result
          this.$router.push({ name: 'Channel', params: {
            index: item.channelIndex,
            title: common.slug(item.channel)
          }});
        }
  }
};
</script>

<style lang="scss">
  @import "./assets/scss/app";
</style>
