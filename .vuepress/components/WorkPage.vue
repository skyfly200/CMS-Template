<template>
  <div class="work-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <Work :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path">
              <Content />
            </Work>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./Nav"
import Work from "./Work"
export default {
  components: {
    Nav,
    Work
  }
};
</script>
<style>
</style>
