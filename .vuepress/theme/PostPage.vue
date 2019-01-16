<template>
  <div class="post-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <Post :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path" md12 >
              <Content />
            </Post>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Post from "./components/Post"
export default {
  components: {
    Nav,
    Post
  }
};
</script>
<style>
</style>
