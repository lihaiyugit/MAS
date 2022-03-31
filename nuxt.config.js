export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cams_web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/reset.css' },// 引入
    ],

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/common.less', // 全局样式添加在此处
    "element-ui/lib/theme-chalk/index.css",
    '@/node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css',
  ],
  //自定义进度条颜色
  loading: { color: '#ed6d38', height: '2px' }, // loading:false,//禁用

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/axios.js", // api请求封装
    // '@/plugins/router',//全局路由守卫配置
    // { src: '@plugins/lib-flexible.js', ssr: false },
    { src: '@plugins/aos.js', ssr: false },
    { src: "@/plugins/vue-swiper.js", ssr: false },
    { src: '@/plugins/element-ui.js', ssr: true }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt',//服务端不能使用localStorage和cookie的解决方法
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // 服务端访问前缀
    // baseURL: "http://testapi.xuexiluxian.cn/",
    // 客户端访问前缀
    // browserBaseURL: "http://testapi.xuexiluxian.cn/",
    proxy: true,//是否允许跨域 开启代理
    prefix: '/', //表示给请求url加个前缀 /api
    credentials: true,// 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    // '/api': {
    //   target: 'http://testapi.xuexiluxian.cn/', // 目标服务器ip
    //   changeOrigin: true, // 表示是否跨域
    //   pathRewrite: {
    //     '^/api': '/',// 把 /api 替换成 /
    //   },
    // }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['element-ui'],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    },

    /**
      * 图片 进行 url 的打包
      */
    loader: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          name: "img/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(ogg|mp3|mp4|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.less$/,
        loaders: "style-loader!css-loader!less-loader"
      }
    ],
    // postcss:[
    //   require('postcss-px2rem')({
    //     remUnit:192 // 之所以写192 是因为设了pc最大宽度1920px
    //   })
    // ]
    /*
    ** Run ESLint on save
    */
    // extend(config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: "pre",
    //       test: /\.(js|vue)$/,
    //       loader: "eslint-loader",
    //       exclude: /(node_modules)/
    //     },
    //     );
    //   }
    // },
  }
  // router:{
  //   middleware:'auth'//全局生效
  // }
}
