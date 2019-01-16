<template>
  <div class="nav-layout">
    <v-navigation-drawer app v-model="drawer">
      <v-list>
        <v-list-tile
          v-for="page in menuPages"
          :key="page.text"
          :to="page.link">
            <v-list-tile-action v-if="page.icon">
              <v-icon> {{ page.icon }} </v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title> {{ page.text }} </v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up">
        <v-icon>menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title>Daniel Vega</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat
          v-for="page in menuPages"
          :key="page.text"
          :to="page.link">
            {{ page.text }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
      computed: {
          menuPages() {
            return this.$site.themeConfig.nav || [];
          }
      },
      data: function() {
        return {
          drawer: false
        };
      },
      mounted () {
        this.$router.afterEach(() => {
          this.drawer = false
        })
      },
  };
</script>
