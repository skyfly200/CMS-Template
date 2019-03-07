<template>
  <v-footer>
    <span>&copy; Skyler Fly-Wilson {{ copyrightYear }}</span>
  </v-footer>
</template>
<script>
  export default {
      computed: {
        copyrightYear() {
          return new Date().getFullYear();
        }
      },
  };
</script>
<style>
  footer span {
    margin: 0 auto;
  }
</style>
