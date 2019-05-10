<template>
  <v-card>
    <v-img v-if="frontmatter.image && !feature" :src="$withBase(frontmatter.image)" alt="Event Poster" class="img" />
    <v-card-title primary-title>
      <a v-if="frontmatter.url" :href="frontmatter.url">
        <h1> {{ frontmatter.title }} </h1>
      </a>
      <h1 v-else> {{ frontmatter.title }} </h1>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 sm6 v-if="frontmatter.image && feature" class="pa-3">
            <v-img :src="$withBase(frontmatter.image)" alt="Event Poster" width="100%" class="img-feature" />
          </v-flex>
          <v-flex xs12 sm6 >
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
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <template v-if="!feature">
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        <v-btn :to="path" flat color="blue">Read More</v-btn>
      </v-card-actions>
  </template>
  </v-card>
</template>
<script>
export default {
  props: ["frontmatter", "feature", "path"]
};
</script>
<style>
</style>
