import config from '@/config';
import md5 from "js-md5";
export default ({ app, $axios, store, redirect }, inject) => {
  //项目地址
  $axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
  $axios.defaults.timeout = 500000;
  $axios.defaults.withCredentials = false;
  // Request请求拦截器：设置Token
  $axios.onRequest((config) => {
    // TODO 使用Vuex存储Token，并做持久化处理
    // config.headers['X-Token'] = store.state.token
    // 本项目token 存储在vuex里面
    // const token = store.state.user.token
    // if (token) config.headers.token = token
    // return config;
  })
  // // Error拦截器：出现错误的时候被调用，根据状态码做对应判断并显示全局Message
  $axios.onError((error) => {
    return error;
    // const code = parseInt(error.response && error.response.status)
    // switch (code) {
    //   // 未登录
    //   case 401:
    //     redirect('/login')
    //     break
    //   default:
    //     break
    // }
    // // 使用Ant Design Vue的message模块显示异常信息
    // message.error(error.response.data.message, 5)
  })
  // Response拦截器：对正常返回的数据进行处理
  $axios.onResponse((response) => {
    return response;
  })
  // fetchPost  请求方式 创建
  $axios.fetchPost = function (url, params, headers) {
    // let urls = url;
    // if (query) {
    //   urls = url + '?' + query;
    // } else {
    //   urls = url;
    // }
    let timestamp = Date.parse(new Date());
    params.timespan = timestamp;
    params.sign = md5(timestamp + store.state.secretKey);
    return new Promise((resolve, reject) => {
      $axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  // GET 请求方式 查看
  $axios.fetchGet = function (url, params, header) {
    let timestamp = Date.parse(new Date());
    params.timespan = timestamp;
    params.sign = md5(timestamp + store.state.secretKey);
    return new Promise((resolve, reject) => {
      $axios.get(url, {
        params: params,
        responseType: header ? header.responseType : 'json'
      })
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  /***
   * 公共接口不需要登录请求地址
   * @param $axios
   * @param params
   */
  $axios.notNeedlogin = function (params, headers) {
    return $axios.fetchPost('/index', params, headers)
  }
    /***
   * 公共接口不需要登录请求地址
   * @param $axios
   * @param params
   */
     $axios.down = function (params, headers) {
      return $axios.fetchPost('/down', params, headers)
    }
  // $axios.defaults.timeout = 500000;
  // $axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;
  // console.log($axios.defaults.baseURL, '$axios.defaults.baseURL')
  // 添加请求拦截器
  // $axios.interceptors.request.use(function (config) {
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
  // $axios.interceptors.response.use(function (response) {
  //   // 对响应数据做点什么
  //   return response.data;
  // }, function (error) {
  //   // 对响应错误做点什么
  //   return Promise.reject(error);
  // });



}
// import axios from 'axios'
// export default {
//   // fetchPost  请求方式 创建
//   fetchPost: function (url, params, query) {
//     let urls = url;
//     if (query) {
//       urls = url + '?' + query;
//     } else {
//       urls = url;
//     }
//     return new Promise((resolve, reject) => {
//       axios.post(urls, params)
//         .then(response => {
//           resolve(response.data);
//         }, err => {
//           reject(err);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },

//   // GET 请求方式 查看
//   fetchGet: function (url, params, header) {
//     return new Promise((resolve, reject) => {
//       axios.get(url, {
//         params: params,
//         responseType: header ? header.responseType : 'json'
//       })
//         .then(response => {
//           resolve(response.data);
//         }, err => {
//           reject(err);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   },

//   // put请求方式 更新
//   fetchPut:function(url, params, query){
//     let urls = url;
//     if (query) {
//       urls = url + '?' + query;
//     } else {
//       urls = url;
//     }
//     return new Promise((resolve, reject) => {
//       axios.put(urls, params,{
//         responseType: header ? header.responseType : 'json'
//       })
//         .then(response => {
//           resolve(response.data);
//         }, err => {
//           reject(err);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     })
//   },
//   // delete请求方式 删除
//   fetchDel:function(url, params, header){
//     return new Promise((resolve, reject) => {
//       axios.delete(url, {
//         params: params,
//         responseType: header ? header.responseType : 'json'
//       })
//         .then(response => {
//           resolve(response.data);
//         }, err => {
//           reject(err);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     })
//   },
// };
