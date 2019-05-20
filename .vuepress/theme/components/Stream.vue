<template>
  <audio :src="url" controls>
    Your browser does not support the audio element. Here is a <a :href="url">link to the stream</a> instead.
  </audio>
</template>
<script>
export default {
  props: ["url"]
};
</script>
<style>
audio {
  width: 100%;
  margin: 20px 0;
}
</style>
