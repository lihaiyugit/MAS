// 通过终端设备显示不同路由(移动、pc)
export default function ({ isServer, req, redirect, route }) {
  let pcOrigin = 'http://localhost:3003'
  let mobileOrigin = 'http://localhost:3004'
  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  return isMobile(userAgent) ? '' : redirect(pcOrigin + route.fullPath)
  // 使用redirect 重定向到外链需要加上前缀:http / https
  // 第二步在nuxt.config.js加上对应配置
  //   router: {
  //     middleware: 'midd'
  // },
}

