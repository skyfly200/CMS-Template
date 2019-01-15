module.exports = {
    title: "Daniel Vega",
    locales: {
        '/': {
            lang: 'en-EN',
            title: 'Daniel Vega',
            description: "Daniel Vega's Personal Website"
        }
    },
    head: [
        ['link', { rel: 'stylesheet', href: `https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css` }],
        ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/icon?family=Material+Icons` }],
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
      [
        '@vuepress/google-analytics',
        { ga: '' }
      ]
    ],
    configureWebpack: (config, isServer) => {
      if (!isServer) {
        config.devServer = {
            hot: false
        };
      }
    },
    serviceWorker: true,
    host: 'localhost',
    themeConfig: {
        search: false,
        repo: 'skyfly200/Daniel-Vega-Site',
        lastUpdated: 'Last Updated', // string | boolean
        nav: [{
                text: 'Home',
                link: '/',
                icon: 'home'
            },
            {
                text: 'Bio',
                link: '/bio.html',
                icon: 'home'
            },
            {
                text: 'Listen',
                link: '/works/',
                icon: 'home'
            },
            {
                text: 'Events',
                link: '/events/',
                icon: 'home'
            },
            {
                text: 'Blog',
                link: '/posts/',
                icon: 'home'
            },
            {
                text: 'Contact',
                link: '/contact.html',
                icon: 'home'
            },
        ],
        serviceWorker: {
          updatePopup: true
        }
    }
}
