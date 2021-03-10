import axios from 'axios'
import {
  Toast
} from 'vant';

//创建新的axios实例，
const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 1000 * 10
})
//console.log(instance.defaults.interceptors);

//可在此设置请求头部
//service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截器
instance.interceptors.request.use(config => {
  //此处可设置请求头部、设置请求loading和数据转化等
  //config.data = JSON.stringify(config.data);
  config.transformRequest = [
    function (data) {
      var ret = "";
      for (var it in data) {
        ret += encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret
    }
  ];
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  const token = localStorage.getItem('Authorization');
  //token也可以放在vuex里面
  //const token = store.state.token; 
  if (token) {
    config.headers.Authorization = token
  } else {
    localStorage.removeItem('Authorization')
  }
  return config
}, error => {
  return Promise.error(error);
})

//响应拦截器
instance.interceptors.response.use(response => {
  //如果返回的状态码为200，说明请求成功，否则抛出错误
  if (response.status === 200) {
    return response
  }
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      //400
      case 400:
        Toast({
          message: '错误请求',
        });
        //403
      case 403:
        Toast({
          message: '登录过期，请重新登录',
        });
        localStorage.removeItem('Authorization')
        //store.commit('loginSuccess', null);
        //跳转到指定页面
        setTimeout(() => {
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
        }, 3000);
        break;
        //404
      case 404:
        Toast({
          message: '网络请求不存在'
        })
        break;
      default:
        Toast({
          message: error.response.data.message,
        })
    }
  } else {
    if (JSON.stringify(error).includes('timeout')) {
      Toast.error('服务器响应超时，请刷新当前页')
    }
    error.message('连接服务器失败')
  }
})

export default instance
