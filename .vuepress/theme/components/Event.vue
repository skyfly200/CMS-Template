<template>
  <v-card>
    <v-layout row>
      <v-flex xs5 class="pa-3">
        <v-img v-if="frontmatter.image" :src="$withBase(frontmatter.image)" alt="" height="150px" class="white--text" />
      </v-flex>
      <v-flex xs7>
        <v-card-title primary-title>
          <a v-if="frontmatter.url" :href="frontmatter.url">
            <h1> {{ frontmatter.title }} </h1>
          </a>
          <h1 v-else> {{ frontmatter.title }} </h1>
        </v-card-title>
        <v-card-text>
          <a v-if="frontmatter.groupUrl" :href="frontmatter.groupUrl">
            <h2 v-if="frontmatter.group"> {{ frontmatter.group }} </h2>
          </a>
          <h2 v-else-if="frontmatter.group"> {{ frontmatter.group }} </h2>
          <a v-if="frontmatter.venueUrl" :href="frontmatter.venueUrl">
            <h3 v-if="frontmatter.venue"> {{ frontmatter.venue }} </h3>
          </a>
          <h3 v-else-if="frontmatter.venue"> {{ frontmatter.venue }} </h3>
          <h4 v-if="frontmatter.location"> {{ frontmatter.location }} </h4>
          <h5> {{ frontmatter.datetime }} </h5>
          <slot></slot>
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions v-if="feature" class="pa-3">
      <v-btn :to="path" flat color="blue">Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["frontmatter", "feature", "path"]
};
</script>
<style>
</style>
