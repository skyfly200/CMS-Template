import Vuetify from 'vuetify'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
    Vue.use(Vuetify)
    router.beforeEach((to, from, next) => {
      if (to.matched.length > 0 && to.matched[0].path === "*") {
        next("/404.html");
      } else {
        next();
      }
    });
}
