<template>
  <audio :src="frontmatter.file" controls>
    Your browser does not support the audio element. Here is a <a :href="frontmatter.file">link to the audio</a> instead.
  </audio>
</template>
<script>
export default {
  props: ["frontmatter"]
};
</script>
<style>
audio {
  width: 100%;
  margin: 20px 0;
}
</style>
