// 通过终端设备显示不同路由(移动、pc)
export default function ({ isServer, req, redirect, route }) {
  let pcOrigin = 'http://localhost:3000'
  let mobileOrigin = 'http://localhost:3001'
  let isMobile = (ua) => {
    return !!ua.match(/AppleWebKit.*Mobile.*/)
  }
  let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
  console.log(isMobile,'isMobile')
  console.log(userAgent,'userAgent')
  console.log(isMobile(userAgent),'===pc=')

  // console.log(isMobile(userAgent),'====pc',mobileOrigin + route.fullPath)
  return isMobile(userAgent) ? redirect(mobileOrigin + route.fullPath) : ''
  // 使用redirect 重定向到外链需要加上前缀:http / https
  // 第二步在nuxt.config.js加上对应配置
  //   router: {
  //     middleware: 'midd'
  // },
}

