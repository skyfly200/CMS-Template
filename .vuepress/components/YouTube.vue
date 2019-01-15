<template>
  <div class="videoWrapper">
    <iframe v-if="!frontmatter.raw" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <span v-else v-html="frontmatter.raw"></span>
  </div>
</template>
<script>
export default {
  props: ["frontmatter"],
  computed: {
    videoUrl: function() {
      let pl = "videoseries?list=";
      let root = "https://www.youtube.com/embed/";
      if (this.frontmatter.playlist) root += pl;
      return root + this.frontmatter.id;
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
