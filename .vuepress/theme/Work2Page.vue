<template>
  <div class="work-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <Work2 :frontmatter="$page.frontmatter" :title="$page.title" :path="$page.path">
              <Content />
            </Work2>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./components/Nav";
import Work2 from "./components/Work2";
export default {
  components: {
    Nav,
    Work2
  }
};
</script>
<style>
</style>
