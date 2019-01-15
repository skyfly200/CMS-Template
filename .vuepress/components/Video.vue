<template>
  <video controls :src="frontmatter.file">
    Your browser does not support the video tag.
    <a :href="frontmatter.file">Here is a link to the file.</a>
  </video>
</template>
<script>
export default {
  props: ["frontmatter"]
};
</script>
<style>
  video {
    width: 100% !important;
    height: auto !important;
  }
</style>
