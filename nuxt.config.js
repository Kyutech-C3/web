import sdkClient from '~/plugins/contentful.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Composite Computer Club [ C3 ]',
    htmlAttrs: {
      lang: 'jp',
      prefix:
        'og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# website: https://ogp.me/ns/website#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'copyright', content: '©　2022 Composite Computer Club.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '九州工業大学情報工学部の Composite Computer Club 通称「C3」の公式サイトです。C3はデジタル作品の制作を行なっているサークルで、現在、「GAME、HACK、CG、MEDIA_ART」の４つのコミュニティーから構成されています。This is the official site of the Composite Computer Club, commonly known as "C3," in the Faculty of Information Technology at Kyushu Institute of Technology. C3 is a club that produces digital works and currently consists of four communities: GAME, HACK, CG, and MEDIA_ART.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'Cache-Control', content: 'no-cache' },
      { hid: 'tw-card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'tw-site', name: 'twitter:site', content: '@c3_kyutech' },
      { hid: 'og-url', property: 'og:url', content: process.env.BASE_URL },
      {
        hid: 'og-site-name',
        property: 'og:site_name',
        content: 'Composite Computer Club [ C3 ]',
      },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'Composite Computer Club [ C3 ] - ホーム',
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-description',
        property: 'og:description',
        content:
          '九州工業大学情報工学部の Composite Computer Club 通称「C3」の公式サイトです。C3はデジタル作品の制作を行なっているサークルで、現在、「GAME、HACK、CG、MEDIA_ART」の４つのコミュニティーから構成されています。',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: 'https://simo-c3.github.io/image_url/c3_logo_circled.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {
      src: './assets/stylesheets/variables.scss',
      lang: 'scss',
    },
  ],

  styleResources: {
    scss: [
      './assets/stylesheets/variables.scss',
      './assets/stylesheets/responsive.scss',
    ],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    '@nuxtjs/device',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-fontawesome',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    [
      '@nuxtjs/google-gtag',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
        debug: true,
      },
    ],
    '@nuxtjs/sitemap',
  ],

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    runtime: true,
  },

  sitemap: {
    hostname: 'process.env.BASE_URL',
    defaults: {
      lastmod: new Date(),
      changefreq: 'weekly',
    },
    cacheTime: 1000 * 60 * 60 * 24,
    exclude: ['/tmp'],
    routes() {
      return Promise.all([
        await sdkClient.getEntries({
          content_type: 'blog',
        }),
        await sdkClient.getEntries({
          content_type: 'news',
        }),
        await sdkClient.getEntries({
          content_type: 'eachCommunity',
        }),
        await sdkClient.getEntries({
          content_type: 'user',
        }),
      ]).then(([blog, news, community, user]) => {
        const urls = ['/about']
        blog.map((item) => urls.push(`/blog/${item.sys.id}`))
        news.map((item) => urls.push(`/news/${item.sys.id}`))
        community.map((item) => urls.push(`/community/${item.sys.id}`))
        user.map((item) => urls.push(`/author/${item.sys.id}`))
        return urls
      })
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    BASE_URL: process.env.BASE_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },

  router: {
    base: '/',
  },

  generate: {
    fallback: true,
  },
}
