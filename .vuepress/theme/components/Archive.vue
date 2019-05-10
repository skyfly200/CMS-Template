<template>
  <div class="archivePlayer" v-bind:style="{ height: height + 'px'}">
    <iframe :src="contentUrl" v-bind:style="{ height: height + 'px'}" width="100%" :height="height" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
  </div>
</template>
<script>
export default {
  props: ["frontmatter"],
  computed: {
    contentUrl: function() {
      let url = "https://archive.org/embed/" + this.frontmatter.id;
      if (this.frontmatter.playlist) url = url + "&playlist=1&list_height=" + this.listHeight;
      return url;
    },
    height: function() {
      return this.frontmatter.playlist ? (this.listHeight + 30) : 30;
    },
    listHeight: function() {
      let count = 7;
      return (17 * count);
    }
  }
};
</script>
<style>
  .archivePlayer {
    position: relative;
    margin: 25px 0;
  }
  .archivePlayer iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>
