<template>
  <v-app dark>
    <Home v-if="isHome"/>
    <Contact v-else-if="isContact"/>
    <Listen v-else-if="isListen" />
    <WorkPage v-else-if="isWork" />
    <Listen v-else-if="isListen2" />
    <WorkPage v-else-if="isWork2" />
    <Events v-else-if="isEvents" />
    <EventPage v-else-if="isEvent" />
    <Blog v-else-if="isBlog" />
    <PostPage v-else-if="isPost" />
    <Base v-else/>
    <Footer />
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
  import Footer from "./components/Footer";
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
        Base,
        Footer
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
          isListen2() {
            const {path} = this.$page;
            return path === "/works2/";
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
          isWork2() {
            const {path} = this.$page;
            return path.startsWith("/works2/");
          },
          isEvent() {
            const {path} = this.$page;
            return path.startsWith("/events/");
          },
          isPost() {
            const {path} = this.$page;
            return path.startsWith("/posts/");
          }
      }
  };
</script>
<style>
  .container {
    padding: 0
  }
</style>
