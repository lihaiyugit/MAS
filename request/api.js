//接口
// 导航接口
// export const NavApi = () => request.get('/nav');
//banner
// export const BannerApi = () => request.get('/Banner')
export const getSliders = ($axios, params) => {
  return $axios.fetchGet('api/slider/getSliders', params);
};

/***
 * 公共接口不需要登录请求地址
 * @param $axios
 * @param params
 */
export const notNeedlogin = ($axios, params) => {
  return $axios.fetchPost('/index', params);
};
/***
 * 公共接口需要登录请求地址
 * @param $axios
 * @param params
 */
export const getUserInfo = ($axios, params) => {
  return $axios.fetchPost('/getUserInfo', params);
};


// export default {
//   /**
//   * [登陆]
//   * @param  {[type]} params [description]
//   * @return {[type]}        [description]
//   */
//   login(params) {
//     return fetch.fetchPost('/march/admin/login', params);
//   },
// }
// export default axios => ({
//   // signIn 登陆
//   signIn(data) {
//     return axios.post(`/sign_in`, data)
//   }
// })
