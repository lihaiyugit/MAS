// import axios from 'axios'
// import config from '@/config';


// // 配置项
// console.log(process.env.NODE_ENV ,'process.env.NODE_ENV ')
// const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
// const axiosOption = {
//   // baseURL: 'https://s-domain.com/api/',
//   timeout: 5000,
//   headers: {'Content-Type': 'application/json'},
//   baseURL:baseURL
// }
// console.log(baseURL,'baseURL')
// // 创建一个单例
// const instance = $axios.create(axiosOption);

// // 添加请求拦截器
// instance.interceptors.request.use(function (config) {
//   // let token = localStorage.getItem("x-auth-token");
//   // if (token) {
//   //   config.headers = {
//   //     "x-auth-token": token
//   //   }
//   // }
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// // 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response.data;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

// export default instance;
const modulesFiles = require.context('./api', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')

  const value = modulesFiles(modulePath)

  modules[moduleName] = value.default || value

  return modules
}, {})

export default modules
