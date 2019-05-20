<template>
  <audio :src="file" controls>
    Your browser does not support the audio element. Here is a <a :href="file">link to the audio</a> instead.
  </audio>
</template>
<script>
export default {
  props: ["file"]
};
</script>
<style>
audio {
  width: 100%;
  margin: 20px 0;
}
</style>
