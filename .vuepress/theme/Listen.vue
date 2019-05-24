<template>
  <div class="base-layout">
    <Nav />
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout class="pa-4 page-title">
          <h1>{{ $page.title }}</h1>
        </v-layout>
        <v-layout class="pa-4">
          <Content />
        </v-layout>
        <v-layout class="pa-2" justify-left row wrap fill-height>
          <v-flex v-for="w in works" :key="w.title" xs12 md10 offset-md1>
            <Work class="work section ma-2" feature="true" v-bind="w">
              <p> {{ w.frontmatter.description }} </p>
            </Work>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
import Work from "./components/Work"
export default {
  components: {
    Nav,
    Work
  },
  computed: {
      works() {
        return this.$site.pages
          .filter(page => page.path.endsWith(".html") && page.path.startsWith(this.$page.path))
          .sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));
      }
  }
};
</script>
<style>
  .page-title h1 {
    margin: 0 auto;
  }
</style>
