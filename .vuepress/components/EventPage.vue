<template>
  <div class="event-layout">
    <Nav />
    <v-content>
      <v-container fluid>
        <v-layout class="pa-4" align-center justify-center fill-height>
          <v-flex xs12 md10>
            <EventItem :frontmatter="$page.frontmatter" :path="$page.path">
              <Content />
            </EventItem>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import Nav from "./Nav"
import EventItem from "./Event"
export default {
  components: {
    Nav,
    EventItem
  }
};
</script>
<style>
</style>
