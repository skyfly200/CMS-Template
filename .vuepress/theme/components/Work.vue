<template>
  <v-card>
    <v-card-title>
      <div class="header">
        <h1>{{ frontmatter.title }}</h1>
        <h4>{{ frontmatter.created }}</h4>
      </div>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-text>
      <div v-for="m in frontmatter.media">
        <h3 v-if="m.title">{{ m.title }}</h3>
        <p v-if="m.description">{{ m.description }}</p>
        <Audio v-if="m.type === 'audio'" :file="m.file"/>
        <Archive v-if="m.type === 'archive.org'" :id="m.id" :playlist="m.playlist"/>
        <Stream v-if="m.type === 'stream'" :url="m.url"/>
        <Video v-if="m.type === 'video'" :file="m.file"/>
        <Photo v-if="m.type === 'image'" :src="m.file"/>
        <YouTube v-if="m.type === 'youtube'" :id="m.id" :playlist="m.playlist"/>
        <br><br>
      </div>
      <slot></slot>
    </v-card-text>
    <v-card-actions v-if="feature">
      <v-btn :to="path" flat >Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import Audio from './Audio';
import Archive from './Archive';
import Stream from './Stream';
import Video from './Video';
import Photo from './Photo';
import YouTube from './YouTube';
export default {
  props: ["frontmatter", "path", "feature"],
  components: {
    Audio,
    Archive,
    Stream,
    Video,
    Photo,
    YouTube
  },
};
</script>
<style>
.header {
  display: flex;
  flex-direction: column;
}
</style>
