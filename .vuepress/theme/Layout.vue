<template>
  <v-app dark>
    <Home v-if="isHome"/>
    <Contact v-else-if="isContact"/>
    <Listen v-else-if="isListen" />
    <WorkPage v-else-if="isWork" />
    <Events v-else-if="isEvents" />
    <EventPage v-else-if="isEvent" />
    <Blog v-else-if="isBlog" />
    <PostPage v-else-if="isPost" />
    <Base v-else/>
    <v-footer app>
      <span>&copy; Daniel Vega {{ copyrightYear }}</span>
    </v-footer>
  </v-app>
</template>
<script>
  import Home from './Home';
  import Contact from './Contact';
  import Listen from './Listen';
  import WorkPage from './WorkPage';
  import Events from './Events';
  import EventPage from './EventPage';
  import Blog from './Blog';
  import PostPage from './PostPage';
  import Base from './Base';
  export default {
      components: {
        Home,
        Contact,
        Listen,
        WorkPage,
        Events,
        EventPage,
        Blog,
        PostPage,
        Base
      },
      computed: {
          isHome() {
            const {path} = this.$page;
            return path === "/";
          },
          isContact() {
            const {path} = this.$page;
            return path === "/contact.html";
          },
          isListen() {
            const {path} = this.$page;
            return path === "/works/";
          },
          isEvents() {
            const {path} = this.$page;
            return path === "/events/";
          },
          isBlog() {
            const {path} = this.$page;
            return path === "/posts/";
          },
          isWork() {
            const {path} = this.$page;
            return path.startsWith("/works/");
          },
          isEvent() {
            const {path} = this.$page;
            return path.startsWith("/events/");
          },
          isPost() {
            const {path} = this.$page;
            return path.startsWith("/posts/");
          },
          copyrightYear() {
            return new Date().getFullYear();
          }
      }
  };
</script>
<style>
  .container {
    padding: 0
  }
  footer span {
    margin: 0 auto;
  }
</style>
