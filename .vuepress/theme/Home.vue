<template>
  <div class="base-layout">
    <Nav class="hidden-md-and-up"  />
    <v-content>
      <v-container fluid>
        <v-parallax :src="$page.frontmatter.parallaxImage">
          <div class="paralax-content">
            <h1> {{ $page.frontmatter.parallaxHeader }} </h1>
            <p> {{ $page.frontmatter.parallaxContent }} </p>
          </div>
        </v-parallax>
        <v-layout class="hidden-sm-and-down">
          <v-btn flat
            v-for="page in menuPages"
            :key="page.text"
            :to="page.link">
              {{ page.text}}
          </v-btn>
        </v-layout>
        <v-layout class="pa-4">
          <Content />
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav"
export default {
  computed: {
      menuPages() {
        let pages = this.$site.themeConfig.nav || [];
        return pages.filter(p => p.title !== "home");
      }
  },
  components: {
    Nav
  }
};
</script>
<style>
  .paralax-content {
    text-align: center;
  }
  main {
    padding: 0 !important;
  }
</style>
