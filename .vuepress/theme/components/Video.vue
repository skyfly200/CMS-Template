<template>
  <video controls :src="file">
    Your browser does not support the video tag.
    <a :href="file">Here is a link to the file.</a>
  </video>
</template>
<script>
export default {
  props: ["file"]
};
</script>
<style>
  video {
    width: 100% !important;
    height: auto !important;
  }
</style>
