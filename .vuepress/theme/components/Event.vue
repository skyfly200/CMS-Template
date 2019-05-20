<template>
  <v-card>
    <v-img v-if="frontmatter.image && !feature" :src="$withBase(frontmatter.image)" alt="Event Poster" height="200px" class="img" />
    <v-card-title primary-title>
      <h1>{{ frontmatter.title }}</h1>
    </v-card-title>
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
              <a v-if="frontmatter.url" :href="frontmatter.url"><h3>{{ frontmatter.url }}</h3></a>
              <slot></slot>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="pa-3">
      <v-btn v-if="!feature" :to="path" depressed color="primary">Read More</v-btn>
      <v-btn v-if="frontmatter.url" :href="frontmatter.url" depressed color="primary">
        <v-icon left>public</v-icon>
        Website
      </v-btn>
      <v-btn v-if="frontmatter.facebook" :href="frontmatter.facebook" depressed color="primary">
        <img height="22px" class="v-icon v-icon--left material-icons theme--dark" src="/assets/fb-logo.png"/>
        Facebook
      </v-btn>
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
