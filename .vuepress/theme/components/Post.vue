<template>
  <v-card>
    <v-img v-if="frontmatter.image" :src="$withBase(frontmatter.image)" alt="Blog post image" height="200px" class="white--text" />
    <v-card-title>
      <h1> {{ frontmatter.title }} </h1>
    </v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions v-if="feature">
      <v-btn :to="path" depressed color="primary">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["frontmatter", "path", "feature"]
};
</script>
<style>
</style>
