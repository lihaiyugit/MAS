//接口
// 导航接口
// export const NavApi = () => request.get('/nav');
//banner
// export const BannerApi = () => request.get('/Banner')
export const getSliders = ($axios,params)=> {
  return  $axios.fetchGet('api/slider/getSliders', params);
};
//   /**
//   * [登陆]
//   * @param  {[type]} params [description]
//   * @return {[type]}        [description]
//   */
export const login = ($axios,params)=> {
  return  $axios.fetchPost('api/u/loginByJson', params);
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
