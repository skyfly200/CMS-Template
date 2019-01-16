<template>
  <v-card>
    <v-card-title>
      <h1> {{ frontmatter.title }} </h1>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-text>
      <Audio v-if="frontmatter.workType === 'audio'" :frontmatter="frontmatter"/>
      <Video v-if="frontmatter.workType === 'video'" :frontmatter="frontmatter"/>
      <YouTube v-if="frontmatter.workType === 'youtube'" :frontmatter="frontmatter"/>
      <slot></slot>
    </v-card-text>
    <v-card-actions v-if="feature">
      <v-btn :to="path" flat >Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import Audio from './Audio';
import Video from './Video';
import YouTube from './YouTube';
export default {
  props: ["frontmatter", "path", "feature"],
  components: {
    Audio,
    Video,
    YouTube
  },
};
</script>
<style>
</style>
