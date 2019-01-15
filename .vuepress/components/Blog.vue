<template>
  <div class="events-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4 page-title">
          <h1>{{ $page.title }}</h1>
        </v-layout>
        <v-layout class="pa-4">
          <Content />
        </v-layout>
        <v-layout class="pa-2" align-center justify-left row fill-height>
          <v-flex v-for="p in posts" :key="p.title" xs12 md6>
            <Post class="post section ma-2" :frontmatter="p.frontmatter" :title="p.title" :path="p.path" feature="true" md12 >
              <p> {{ p.frontmatter.description }} </p>
            </Post>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./Nav"
import Post from "./Post"
export default {
  components: {
    Nav,
    Post
  },
  computed: {
      posts() {
        let posts = this.$site.pages
          .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
          .sort((a, b) => Date.parse(b.frontmatter.datetime) - Date.parse(a.frontmatter.datetime));
        return posts;
      }
  }
};
</script>
<style>
  .page-title h1 {
    margin: 0 auto;
  }
</style>
