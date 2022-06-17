export default {
  /**
   * @description 项目名字
   */
  platformName: 'MAS官网',
  /**
   * @description token在Cookie中存储的天数，默认7天
   */
  cookieConfig: {
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  },
  /***
   *  @description 平台域
   */
  domain: '',
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    dev: 'https://develop.chinamas.cn',
    // browserDev: '',
    pro: 'https://develop.chinamas.cn',
    // browserPro: '',
  },


}
