<template>
  <div class="videoWrapper">
    <iframe v-if="!raw" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <span v-else v-html="raw"></span>
  </div>
</template>
<script>
export default {
  props: ["raw", "id", "playlist"],
  computed: {
    videoUrl: function() {
      let pl = "videoseries?list=";
      let root = "https://www.youtube.com/embed/";
      if (this.playlist) root += pl;
      return root + this.id;
    }
  }
};
</script>
<style>
  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
